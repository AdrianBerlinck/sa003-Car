'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

export default function Quality() {
  interface VeiculoProduzido {
    id: string;
    modelo: string;
    cor: string;
    portas: number;
    id_producao: string;
    status?: 'aprovado' | 'reprovado' | 'pendente';
  }

  const [veiculosProduzidos, setVeiculosProduzidos] = useState<VeiculoProduzido[]>([]);
  const [comentarios, setComentarios] = useState<{ [key: string]: string }>({});

  const fetchVeiculosProduzidos = async () => {
    try {
      const res = await axios.get<VeiculoProduzido[]>('http://localhost:3333/veiculosProduzidos');
      setVeiculosProduzidos(res.data);
    } catch (error) {
      console.error('Erro ao buscar veículos produzidos:', error);
    }
  };

  useEffect(() => {
    fetchVeiculosProduzidos();
  }, []);

  const handleComentarioChange = (id: string, comentario: string) => {
    setComentarios((prev) => ({ ...prev, [id]: comentario }));
  };

  const marcarComoConcluido = async (id: string) => {
    try {
      await axios.patch(`http://localhost:3333/veiculosProduzidos/${id}`, { status: 'pendente' });
      setVeiculosProduzidos((prev) =>
        prev.map((vp) => (vp.id === id ? { ...vp, status: 'pendente' } : vp))
      );
      alert(`Veículo ${id} foi marcado como pendente novamente.`);
    } catch (error) {
      console.error('Erro ao marcar como concluído:', error);
    }
  };

  return (
    <div className={styles.containerQualidade}>
      <h2 className={styles.tittle}>Veículos em Manutenção</h2>
      <ul className={styles.ulLista}>
        {veiculosProduzidos.filter(v => v.status === 'reprovado').map(v => (
          <li key={v.id} className={styles.liVeiculos}>
            <p>
              <strong>Cod:</strong> {v.id} - <strong>Modelo:</strong> {v.modelo} - <strong>Cor:</strong> {v.cor} - <strong>Portas:</strong> {v.portas}
            </p>
            <textarea
              placeholder="Adicionar comentário..."
              value={comentarios[v.id] || ''}
              onChange={(e) => handleComentarioChange(v.id, e.target.value)}
              className={styles.comentarioInput}
            />
            <button onClick={() => marcarComoConcluido(v.id)} className={styles.botaoConcluir}>
              Marcar como Concluído
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
