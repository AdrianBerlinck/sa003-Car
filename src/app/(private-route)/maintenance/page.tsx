"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { CheckCircle, Edit, Delete } from "@mui/icons-material";
import styles from "./styles.module.css";

export default function Maintenance() {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(true);

  const [veiculos] = useState([{ nome: "Uno" }, { nome: "Gol" }, { nome: "Palio" }]);
  const tiposManutencao = [
    { id: 1, nome: "Preventiva" },
    { id: 2, nome: "Corretiva" },
  ];

  const [veiculoSelecionado, setVeiculoSelecionado] = useState("");
  const [tipoManutencaoSelecionado, setTipoManutencaoSelecionado] = useState("");
  const [descricao, setDescricao] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const [manutencoes, setManutencoes] = useState<
    { id: number; veiculo: string; tipo: string; descricao: string; data: string }[]
  >([]);

  async function fetchManutencoes() {
    try {
      const response = await fetch("http://localhost:3333/manutencoes");
      if (!response.ok) throw new Error("Erro ao buscar manutenções");
      const data = await response.json();
      setManutencoes(data);
    } catch (error) {
      console.error("Erro ao buscar manutenções:", error);
    }
  }

  useEffect(() => {
    fetchManutencoes();
  }, []);

  async function handleSubmit() {
    if (!veiculoSelecionado || !tipoManutencaoSelecionado) {
      alert("Selecione o veículo e o tipo de manutenção.");
      return;
    }

    setIsLoading(true);
    setButtonStatus(false);

    const manutencao = {
      veiculo: veiculoSelecionado,
      tipo: tipoManutencaoSelecionado,
      descricao,
      data: new Date().toISOString(),
    };

    try {
      const url = editId
        ? `http://localhost:3333/manutencoes/${editId}`
        : "http://localhost:3333/manutencoes";
      const method = editId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(manutencao),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro: ${response.status} - ${errorText}`);
      }

      setSent(true);
      setVeiculoSelecionado("");
      setTipoManutencaoSelecionado("");
      setDescricao("");
      setEditId(null);
      await fetchManutencoes();
    } catch (error) {
      alert("Erro ao salvar manutenção. Veja o console.");
      console.error(error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSent(false);
        setButtonStatus(true);
      }, 3000);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Tem certeza que deseja excluir?")) return;

    try {
      await fetch(`http://localhost:3333/manutencoes/${id}`, {
        method: "DELETE",
      });
      await fetchManutencoes();
    } catch (err) {
      console.error("Erro ao excluir:", err);
    }
  }

  function handleEdit(manutencao: any) {
    setVeiculoSelecionado(manutencao.veiculo);
    setTipoManutencaoSelecionado(manutencao.tipo);
    setDescricao(manutencao.descricao);
    setEditId(manutencao.id);
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {editId ? "Editar Manutenção" : "Registrar Manutenção"}
        </h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <FormControl className={styles.input}>
            <InputLabel>Veículo</InputLabel>
            <Select
              value={veiculoSelecionado}
              onChange={(e) => setVeiculoSelecionado(e.target.value)}
              label="Veículo"
            >
              {veiculos.map((v, idx) => (
                <MenuItem key={idx} value={v.nome}>
                  {v.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={styles.input}>
            <InputLabel>Tipo</InputLabel>
            <Select
              value={tipoManutencaoSelecionado}
              onChange={(e) => setTipoManutencaoSelecionado(e.target.value)}
              label="Tipo"
            >
              {tiposManutencao.map((t) => (
                <MenuItem key={t.id} value={t.nome}>
                  {t.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Descrição"
            multiline
            rows={3}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className={styles.input}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!buttonStatus}
            fullWidth
          >
            {editId ? "Salvar Alterações" : "Registrar Manutenção"}
          </Button>

          {isLoading && (
            <Box sx={{ mt: 2 }}>
              <LinearProgress />
              <Typography sx={{ mt: 1 }}>Salvando...</Typography>
            </Box>
          )}

          {sent && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2, color: "green" }}>
              <CheckCircle />
              <Typography>Manutenção salva com sucesso!</Typography>
            </Box>
          )}
        </form>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6" gutterBottom>
            Histórico de Manutenções
          </Typography>
          {manutencoes.length === 0 && <Typography>Nenhuma manutenção registrada.</Typography>}
          {manutencoes.map((m) => (
            <Box key={m.id} className={styles.card}>
              <Typography><strong>Veículo:</strong> {m.veiculo}</Typography>
              <Typography><strong>Tipo:</strong> {m.tipo}</Typography>
              {m.descricao && <Typography><strong>Descrição:</strong> {m.descricao}</Typography>}
              <Typography variant="caption" color="text.secondary">
                {new Date(m.data).toLocaleString()}
              </Typography>

              <div className={styles.actions}>
                <Button size="small" color="primary" onClick={() => handleEdit(m)}>Editar</Button>
                <Button size="small" color="error" onClick={() => handleDelete(m.id)}>Excluir</Button>
              </div>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
}
