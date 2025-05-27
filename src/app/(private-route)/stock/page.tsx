'use client';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css'; 

interface Produto {
  id: string;
  name: string;
  mark: string;
  qnt: number;
}

export default function Stock() {
  const [name, setName] = useState('');
  const [mark, setMark] = useState('');
  const [qnt, setQnt] = useState('');
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [editandoId, setEditandoId] = useState<string | null>(null);

  const fetchProdutos = async () => {
    try {
      const response = await fetch('http://localhost:3333/produtos');
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (editandoId) {
      try {
        await axios.put(`http://localhost:3333/produtos/${editandoId}`, {
          id: editandoId,
          name,
          mark,
          qnt: Number(qnt),
        });
        setEditandoId(null);
      } catch (error) {
        console.error('Erro ao editar produto:', error);
      }
    } else {
      const novoProduto: Produto = {
        id: crypto.randomUUID(),
        name,
        mark,
        qnt: Number(qnt),
      };

      try {
        await axios.post('http://localhost:3333/produtos', novoProduto);
      } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
      }
    }

    setName('');
    setMark('');
    setQnt('');
    fetchProdutos();
  }

  async function handleDelete(id: string) {
    try {
      await axios.delete(`http://localhost:3333/produtos/${id}`);
      fetchProdutos();
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  }

  function handleEdit(produto: Produto) {
    setName(produto.name);
    setMark(produto.mark);
    setQnt(String(produto.qnt));
    setEditandoId(produto.id);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Marca"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <input
            type="number"
            placeholder="Quantidade"
            value={qnt}
            onChange={(e) => setQnt(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            {editandoId ? 'Atualizar Produto' : 'Cadastrar Produto'}
          </button>
          {editandoId && (
            <button
              type="button"
              onClick={() => {
                setEditandoId(null);
                setName('');
                setMark('');
                setQnt('');
              }}
              className={styles.button}
            >
              Cancelar Edição
            </button>
          )}
        </div>
      </form>

      <div className={styles.lista}>
        <h2 className={styles.tittle}>Lista de Produtos</h2>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <h2>Nome: {produto.name}</h2>
              <h2>Marca: {produto.mark}</h2>
              <h2>Quantidade: {produto.qnt}</h2>
              <div className={styles.containerButton}>
                <button
                  className={styles.buttonEditar}
                  onClick={() => handleEdit(produto)}
                >
                  Editar
                </button>
                <button
                  className={styles.buttonDeletar}
                  onClick={() => handleDelete(produto.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
