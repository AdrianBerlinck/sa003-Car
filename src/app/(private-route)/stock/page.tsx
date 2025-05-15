'use client'
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

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
      // Editar produto existente
      try {
        await axios.put(`http://localhost:3333/produtos/${editandoId}`, {
          id: editandoId,
          name,
          mark,
          qnt: Number(qnt),
        });
        setEditandoId(null); // limpa estado de edição
      } catch (error) {
        console.error('Erro ao editar produto:', error);
      }
    } else {
      // Criar novo produto
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
    <div id='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder='Marca'
          value={mark}
          onChange={(e) => setMark(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder='Quantidade'
          value={qnt}
          onChange={(e) => setQnt(e.target.value)}
          required
        />
        <button type='submit'>
          {editandoId ? 'Atualizar Produto' : 'Cadastrar Produto'}
        </button>
        {editandoId && (
          <button
            type='button'
            onClick={() => {
              setEditandoId(null);
              setName('');
              setMark('');
              setQnt('');
            }}
          >
            Cancelar Edição
          </button>
        )}
      </form>

      <div id='lista'>
        <h2>Lista de Produtos</h2>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              Nome: {produto.name}, Marca: {produto.mark}, Quantidade: {produto.qnt}{' '}
              <button onClick={() => handleEdit(produto)}>Editar</button>{' '}
              <button onClick={() => handleDelete(produto.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
