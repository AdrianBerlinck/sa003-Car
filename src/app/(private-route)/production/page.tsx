"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { CheckCircle, Delete, Edit } from "@mui/icons-material";

type Modelo = { nome: string; pecas: string };
type Veiculo = {
  id: number;
  modelo: string;
  cor: string;
  quantidade: number;
  portas: number;
  data: string;
};

export default function Production() {
  const [progress, setProgress] = useState(".");
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [modelos, setModelos] = useState<Modelo[]>([
    { nome: "Uno", pecas: "Motor, Roda" },
    { nome: "Gol", pecas: "Volante, Roda" },
  ]);
  const [cores, setCores] = useState(["Preto", "Vermelho", "Branco", "Prata"]);

  const [novoModelo, setNovoModelo] = useState("");
  const [pecasModelo, setPecasModelo] = useState("");
  const [modeloParaPeca, setModeloParaPeca] = useState("");
  const [novaCor, setNovaCor] = useState("");
  const [corSelecionada, setCorSelecionada] = useState("");
  const [portas, setPortas] = useState(2);
  const [quantidade, setQuantidade] = useState(1);

  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [veiculoEditando, setVeiculoEditando] = useState<Veiculo | null>(null);

  useEffect(() => {
    fetchVeiculos();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev === "..." ? "." : prev + "."));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  async function fetchVeiculos() {
    try {
      const res = await fetch("http://localhost:3333/veiculos");
      if (!res.ok) throw new Error("Erro ao buscar veículos");
      const data: Veiculo[] = await res.json();
      setVeiculos(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleAddModelo = () => {
    if (novoModelo.trim() && !modelos.some((m) => m.nome === novoModelo.trim())) {
      setModelos([...modelos, { nome: novoModelo.trim(), pecas: "" }]);
      setNovoModelo("");
    }
  };

  const handleAddPecas = () => {
    if (
      modeloParaPeca.trim() &&
      pecasModelo.trim() &&
      modelos.some((m) => m.nome === modeloParaPeca.trim())
    ) {
      setModelos(
        modelos.map((m) =>
          m.nome === modeloParaPeca.trim()
            ? {
                ...m,
                pecas: m.pecas
                  ? `${m.pecas}, ${pecasModelo.trim()}`
                  : pecasModelo.trim(),
              }
            : m
        )
      );
      setPecasModelo("");
    }
  };

  const handleAddCor = () => {
    if (novaCor.trim() && !cores.includes(novaCor.trim())) {
      setCores([...cores, novaCor.trim()]);
      setNovaCor("");
    }
  };

  async function handleSubmit() {
    if (!modeloParaPeca || !corSelecionada || quantidade < 1) {
      alert("Preencha o modelo, cor e quantidade corretamente.");
      return;
    }

    setIsLoading(true);
    setButtonEnabled(false);

    const novoVeiculo = {
      modelo: modeloParaPeca,
      cor: corSelecionada,
      quantidade,
      portas,
      data: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:3333/veiculos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoVeiculo),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro ao salvar veículo: ${response.status} - ${errorText}`);
      }

      setSent(true);
      await fetchVeiculos();

      setNovoModelo("");
      setPecasModelo("");
      setModeloParaPeca("");
      setNovaCor("");
      setCorSelecionada("");
      setPortas(2);
      setQuantidade(1);
    } catch (error) {
      alert("Erro ao salvar veículo. Veja o console para mais detalhes.");
      console.error("Erro no fetch:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSent(false);
        setButtonEnabled(true);
      }, 3000);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Deseja realmente excluir este veículo?")) return;
    try {
      const res = await fetch(`http://localhost:3333/veiculos/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Erro ao excluir veículo");
      setVeiculos(veiculos.filter((v) => v.id !== id));
    } catch (error) {
      alert("Erro ao excluir veículo. Veja o console.");
      console.error(error);
    }
  }

  function openEditDialog(veiculo: Veiculo) {
    setVeiculoEditando(veiculo);
    setEditDialogOpen(true);
  }

  async function handleEditSave() {
    if (!veiculoEditando) return;

    if (!veiculoEditando.modelo || !veiculoEditando.cor || veiculoEditando.quantidade < 1) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3333/veiculos/${veiculoEditando.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(veiculoEditando),
      });
      if (!res.ok) throw new Error("Erro ao atualizar veículo");
      await fetchVeiculos();
      setEditDialogOpen(false);
      setVeiculoEditando(null);
    } catch (error) {
      alert("Erro ao atualizar veículo. Veja o console.");
      console.error(error);
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className="title">Novo Veículo</h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.modeloSection}>
            <div className={styles.modeloInputs}>
              <TextField
                label="Novo Modelo"
                variant="outlined"
                size="small"
                value={novoModelo}
                onChange={(e) => setNovoModelo(e.target.value)}
              />
            </div>
            <div className={styles.modeloButton}>
              <Button variant="contained" onClick={handleAddModelo} className={styles.addButton}>
                Adicionar Modelo
              </Button>
            </div>
          </div>

          <div className={styles.modeloSection}>
            <div className={styles.modeloInputs}>
              <TextField
                label="Modelo existente"
                variant="outlined"
                size="small"
                value={modeloParaPeca}
                onChange={(e) => setModeloParaPeca(e.target.value)}
              />
              <TextField
                label="Peças a serem adicionadas"
                variant="outlined"
                size="small"
                value={pecasModelo}
                onChange={(e) => setPecasModelo(e.target.value)}
              />
            </div>
            <div className={styles.modeloButton}>
              <Button variant="contained" onClick={handleAddPecas} className={styles.addButton}>
                Adicionar Peças ao Modelo
              </Button>
            </div>
          </div>

          <div className={styles.modeloSection} style={{ marginTop: 20 }}>
            <div className={styles.modeloInputs}>
              <TextField
                label="Nova Cor"
                variant="outlined"
                size="small"
                value={novaCor}
                onChange={(e) => setNovaCor(e.target.value)}
              />
            </div>
            <div className={styles.modeloButton}>
              <Button variant="contained" onClick={handleAddCor} className={styles.addButton}>
                Adicionar Cor
              </Button>
            </div>
          </div>

          <div className={styles.content}>
            <div className={`${styles.div} ${styles.div1}`}>
              <FormControl sx={{ width: 300, marginBottom: 2 }}>
                <InputLabel sx={{ backgroundColor: "#fff" }}>Selecione o Modelo</InputLabel>
                <Select
                  value={modeloParaPeca}
                  onChange={(e) => setModeloParaPeca(e.target.value)}
                  label="Selecione o Modelo"
                >
                  {modelos.map((modelo, index) => (
                    <MenuItem key={index} value={modelo.nome}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Box>
                          <strong>{modelo.nome}</strong> — {modelo.pecas}
                        </Box>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            setModelos(modelos.filter((m) => m.nome !== modelo.nome));
                            if (modeloParaPeca === modelo.nome) setModeloParaPeca("");
                          }}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ width: 200, marginBottom: 2 }}>
                <InputLabel sx={{ backgroundColor: "#fff" }}>Selecione a Cor</InputLabel>
                <Select
                  value={corSelecionada}
                  onChange={(e) => setCorSelecionada(e.target.value)}
                  label="Selecione a Cor"
                >
                  {cores.map((cor, index) => (
                    <MenuItem key={index} value={cor}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <span>{cor}</span>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCores(cores.filter((c) => c !== cor));
                            if (cor === corSelecionada) setCorSelecionada("");
                          }}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={styles.div}>
              <TextField
                label="Quantidade"
                variant="outlined"
                type="number"
                value={quantidade}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 1) setQuantidade(value);
                }}
                inputProps={{ min: 1 }}
              />
              <FormControl sx={{ width: 300 }}>
                <InputLabel sx={{ backgroundColor: "#fff" }}>
                  Selecione a Quantidade de Portas
                </InputLabel>
                <Select
                  value={portas}
                  onChange={(e) => setPortas(Number(e.target.value))}
                  label="Selecione a Quantidade de Portas"
                >
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className={styles.button}>
            <Button
              variant="contained"
              color="success"
              onClick={handleSubmit}
              disabled={!buttonEnabled}
            >
              Enviar para a produção
            </Button>
          </div>

          {isLoading && (
            <div className={styles.loading}>
              <Box sx={{ width: "80%" }}>
                <LinearProgress />
                <Typography sx={{ color: "text.primary", marginTop: 1 }}>
                  Enviando para a produção{progress}
                </Typography>
              </Box>
            </div>
          )}

          {sent && (
            <div className={styles.sent}>
              <CheckCircle color="success" fontSize="large" />
              <p>Enviado com Sucesso</p>
            </div>
          )}
        </form>

        <div style={{ marginTop: 40 }}>
          <Typography variant="h5" gutterBottom>
            Produções Cadastradas
          </Typography>

          {veiculos.length === 0 ? (
            <Typography>Nenhuma produção cadastrada.</Typography>
          ) : (
            veiculos.map((v) => (
              <Box
                key={v.id}
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 1,
                  padding: 2,
                  marginBottom: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography>
                    <strong>Modelo:</strong> {v.modelo} | <strong>Cor:</strong> {v.cor} |{" "}
                    <strong>Qtd:</strong> {v.quantidade} | <strong>Portas:</strong> {v.portas} |{" "}
                    <strong>Data:</strong> {new Date(v.data).toLocaleDateString()}
                  </Typography>
                </Box>
                <Box>
                  <IconButton color="primary" onClick={() => openEditDialog(v)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(v.id)}>
                    <Delete />
                  </IconButton>
                </Box>
              </Box>
            ))
          )}
        </div>

        <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
          <DialogTitle>Editar Veículo</DialogTitle>
          <DialogContent sx={{ minWidth: 400 }}>
            <TextField
              margin="dense"
              label="Modelo"
              fullWidth
              value={veiculoEditando?.modelo || ""}
              onChange={(e) =>
                setVeiculoEditando((old) =>
                  old ? { ...old, modelo: e.target.value } : null
                )
              }
            />
            <TextField
              margin="dense"
              label="Cor"
              fullWidth
              value={veiculoEditando?.cor || ""}
              onChange={(e) =>
                setVeiculoEditando((old) =>
                  old ? { ...old, cor: e.target.value } : null
                )
              }
            />
            <TextField
              margin="dense"
              label="Quantidade"
              type="number"
              fullWidth
              inputProps={{ min: 1 }}
              value={veiculoEditando?.quantidade || 1}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val >= 1)
                  setVeiculoEditando((old) => (old ? { ...old, quantidade: val } : null));
              }}
            />
            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel>Portas</InputLabel>
              <Select
                value={veiculoEditando?.portas || 2}
                onChange={(e) =>
                  setVeiculoEditando((old) =>
                    old ? { ...old, portas: Number(e.target.value) } : null
                  )
                }
                label="Portas"
              >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialogOpen(false)}>Cancelar</Button>
            <Button variant="contained" onClick={handleEditSave}>
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
