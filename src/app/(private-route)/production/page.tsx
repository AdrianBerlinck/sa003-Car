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
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h2 className="title">Novo Veículo</h2>
                <form className={styles.form}>
                    
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
                                <Select>
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
                                <Select>
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
