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
} from "@mui/material";
import { CheckCircle, Delete } from "@mui/icons-material";

export default function Production() {
  const [progress, setProgress] = useState(".");
  const [buttonStatus, setButtonStatus] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const [modelos, setModelos] = useState(["Uno", "Gol"]);
  const [cores, setCores] = useState(["Preto", "Vermelho", "Branco", "Prata"]);

  const [novoModelo, setNovoModelo] = useState("");
  const [novaCor, setNovaCor] = useState("");

  // States para dados do formulário
  const [selectedModelo, setSelectedModelo] = useState("");
  const [selectedCor, setSelectedCor] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [portas, setPortas] = useState("");

  // Animação do loading dots
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev === "..." ? "." : prev + "."));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  async function handleSubmit() {
    if (!selectedModelo || !selectedCor || !quantidade || !portas) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    setButtonStatus(false);

    const novoVeiculo = {
      modelo: selectedModelo,
      cor: selectedCor,
      quantidade: Number(quantidade),
      portas: Number(portas),
      data: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:3333/veiculos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoVeiculo),
      });

      if (!response.ok) throw new Error("Erro ao salvar no servidor");

      setIsLoading(false);
      setSent(true);

      // Limpar campos após envio
      setSelectedModelo("");
      setSelectedCor("");
      setQuantidade("");
      setPortas("");

      setTimeout(() => {
        setSent(false);
        setButtonStatus(true);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar o veículo.");
      setIsLoading(false);
      setButtonStatus(true);
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className="title">Novo Veículo</h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          {/* Adicionar novo modelo */}
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="Novo Modelo"
              variant="outlined"
              size="small"
              value={novoModelo}
              onChange={(e) => setNovoModelo(e.target.value)}
              sx={{ marginRight: 2 }}
            />
            <Button
              variant="contained"
              onClick={() => {
                if (novoModelo && !modelos.includes(novoModelo)) {
                  setModelos([...modelos, novoModelo]);
                  setNovoModelo("");
                }
              }}
            >
              Adicionar Modelo
            </Button>
          </div>

          {/* Adicionar nova cor */}
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="Nova Cor"
              variant="outlined"
              size="small"
              value={novaCor}
              onChange={(e) => setNovaCor(e.target.value)}
              sx={{ marginRight: 2 }}
            />
            <Button
              variant="contained"
              onClick={() => {
                if (novaCor && !cores.includes(novaCor)) {
                  setCores([...cores, novaCor]);
                  setNovaCor("");
                }
              }}
            >
              Adicionar Cor
            </Button>
          </div>

          <div className={styles.content}>
            <div className={`${styles.div} ${styles.div1}`}>
              <FormControl sx={{ width: 200 }}>
                <InputLabel sx={{ backgroundColor: "#fff" }}>
                  Selecione o Modelo
                </InputLabel>
                <Select
                  value={selectedModelo}
                  onChange={(e) => setSelectedModelo(e.target.value)}
                  label="Selecione o Modelo"
                >
                  {modelos.map((modelo, index) => (
                    <MenuItem key={index} value={modelo}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <span>{modelo}</span>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            setModelos(modelos.filter((m) => m !== modelo));
                            if (selectedModelo === modelo) setSelectedModelo("");
                          }}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ width: 200 }}>
                <InputLabel sx={{ backgroundColor: "#fff" }}>
                  Selecione a Cor
                </InputLabel>
                <Select
                  value={selectedCor}
                  onChange={(e) => setSelectedCor(e.target.value)}
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
                            if (selectedCor === cor) setSelectedCor("");
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
                onChange={(e) => setQuantidade(e.target.value)}
              />
              <FormControl sx={{ width: 300 }}>
                <InputLabel sx={{ backgroundColor: "#fff" }}>
                  Selecione a Quantidade de Portas
                </InputLabel>
                <Select
                  value={portas}
                  onChange={(e) => setPortas(e.target.value)}
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
              disabled={!buttonStatus}
            >
              Enviar para a produção
            </Button>
          </div>

          {isLoading ? (
            <div className={styles.loading}>
              <Box sx={{ width: "80%" }}>
                <Box>
                  <LinearProgress />
                </Box>
                <Box>
                  <Typography sx={{ color: "text.primary", marginTop: 1 }}>
                    Enviando para a produção{progress}
                  </Typography>
                </Box>
              </Box>
            </div>
          ) : !isLoading && sent ? (
            <div className={styles.sent}>
              <CheckCircle color="success" fontSize="large" />
              <p>Enviado com Sucesso</p>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
