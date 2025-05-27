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

  interface Veiculos {
    id: string;
    modelo: string;
    cor: string;
    quantidade: number;
    portas: number;
    data: Date;
  }

  const [veiculos, setVeiculos] = useState<Veiculos[]>([]);
  const [veiculosProduzidos, setVeiculosProduzidos] = useState<VeiculoProduzido[]>([]);

  const fetchVeiculos = async () => {
    try {

      const [veiculosRes, produzidosRes] = await Promise.all([
        fetch('http://localhost:3333/veiculos').then(res => res.json()),
        axios.get<VeiculoProduzido[]>('http://localhost:3333/veiculosProduzidos').then(res => res.data),
      ]);

      setVeiculos(veiculosRes);

      const novosProduzidos: VeiculoProduzido[] = [];

      for (const veiculo of veiculosRes) {
        const produzidosDoVeiculo = produzidosRes.filter(p => p.id_producao === veiculo.id);
        const faltam = veiculo.quantidade - produzidosDoVeiculo.length;

        for (let i = 0; i < faltam; i++) {
          const novo: VeiculoProduzido = {
            id: crypto.randomUUID(),
            modelo: veiculo.modelo,
            cor: veiculo.cor,
            portas: veiculo.portas,
            id_producao: veiculo.id,
            status: 'pendente',
          };
          await axios.post('http://localhost:3333/veiculosProduzidos', novo);
          novosProduzidos.push(novo);
        }
      }

      setVeiculosProduzidos([...produzidosRes, ...novosProduzidos]);
    } catch (error) {
      console.error('Erro ao buscar ou criar veículos:', error);
    }
  };

  useEffect(() => {
    fetchVeiculos();
  }, []);

  const handleStatusChange = async (id: string, novoStatus: 'aprovado' | 'reprovado' | 'pendente') => {
    try {
      await axios.patch(`http://localhost:3333/veiculosProduzidos/${id}`, { status: novoStatus });

      setVeiculosProduzidos((prev) =>
        prev.map((vp) => (vp.id === id ? { ...vp, status: novoStatus } : vp))
      );
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  };

  // Função para capitalizar a primeira letra (ex: 'pendente' -> 'Pendente')
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={styles.containerQualidade}>
      <div id="lista">
        <h2 className={styles.tittle}>Lista de Produção</h2>
        <ul className={styles.ulLista}>
          {veiculos.map((veiculo) => {
            const produzidos = veiculosProduzidos.filter((vp) => vp.id_producao === veiculo.id);

            return (
              <li key={veiculo.id} className={styles.liLista}>
                <h2 className={styles.tittleLote}>
                  Modelo: {veiculo.modelo}, Cor: {veiculo.cor}, Quantidade: {veiculo.quantidade},{' '}
                  <span className={styles.tittleId}>Código lote: {veiculo.id}</span>
                </h2>
                <div>
                  {produzidos.length > 0 ? (
                    <ul className={styles.ulLista}>
                      {produzidos.map((p) => (
                        <li key={p.id} className={`${styles.liVeiculos} ${styles['status' + capitalize(p.status || 'pendente')]}`}>
                          <span>
                            Cod: {p.id} - Modelo: {p.modelo} - Cor: {p.cor} - Portas: {p.portas}
                          </span>
                          <select
                            className={styles.selectInput}
                            value={p.status || 'pendente'}
                            onChange={(e) =>
                              handleStatusChange(
                                p.id,
                                e.target.value as 'aprovado' | 'reprovado' | 'pendente'
                              )
                            }
                          >
                            <option value="pendente">Pendente</option>
                            <option value="aprovado">Aprovado</option>
                            <option value="reprovado">Reprovado</option>
                          </select>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Sem veículos produzidos ainda.</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
