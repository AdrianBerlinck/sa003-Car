"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Box, Button, FormControl, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography, IconButton} from "@mui/material";
import { CheckCircle, Delete } from "@mui/icons-material";

export default function Production() {
  const [progress, setProgress] = useState(".");
  const [buttonStatus, setButtonStatus] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const [modelos, setModelos] = useState<{ nome: string; pecas: string }[]>([
    { nome: "Uno", pecas: "Motor, Roda" },
    { nome: "Gol", pecas: "Volante, Roda" },
  ]);
  const [cores, setCores] = useState(["Preto", "Vermelho", "Branco", "Prata"]);

  const [novoModelo, setNovoModelo] = useState("");
  const [pecasModelo, setPecasModelo] = useState("");
  const [modeloParaPeca, setModeloParaPeca] = useState("");
  const [novaCor, setNovaCor] = useState("");
  const [corSelecionada, setCorSelecionada] = useState("");

  function handleSubmit() {
    setIsLoading(true);
    setButtonStatus(false);

    setTimeout(() => {
      setIsLoading(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setButtonStatus(true);
      }, 3000);
    }, 7000);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress === "..." ? "." : prevProgress + "."));
    }, 800);
    return () => clearInterval(timer);
  }, []);

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
              <Button
                variant="contained"
                onClick={() => {
                  if (novoModelo && !modelos.some((m) => m.nome === novoModelo)) {
                    setModelos([...modelos, { nome: novoModelo, pecas: "" }]);
                    setNovoModelo("");
                  }
                }}
                className={styles.addButton}
              >
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
              <Button
                variant="contained"
                className={styles.addButton}
                onClick={() => {
                  if (
                    modeloParaPeca &&
                    pecasModelo &&
                    modelos.some((m) => m.nome === modeloParaPeca)
                  ) {
                    setModelos(
                      modelos.map((m) =>
                        m.nome === modeloParaPeca
                          ? {
                              ...m,
                              pecas: m.pecas
                                ? `${m.pecas}, ${pecasModelo}`
                                : pecasModelo,
                            }
                          : m
                      )
                    );
                    setPecasModelo("");
                  }
                }}
              >
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
              <Button
                variant="contained"
                className={styles.addButton}
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
              <TextField label="Quantidade" variant="outlined" type="number" />
              <FormControl sx={{ width: 300 }}>
                <InputLabel sx={{ backgroundColor: "#fff" }}>
                  Selecione a Quantidade de Portas
                </InputLabel>
                <Select>
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
                <LinearProgress />
                <Typography sx={{ color: "text.primary", marginTop: 1 }}>
                  Enviando para a produção{progress}
                </Typography>
              </Box>
            </div>
          ) : sent ? (
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
