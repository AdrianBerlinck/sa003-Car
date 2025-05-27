'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { PieChart } from '@mui/x-charts/PieChart';

export function GraphicQuality() {
  const [qualityData, setQualityData] = useState([
    { id: 0, value: 0, label: 'Aprovado' },
    { id: 1, value: 0, label: 'Reprovado' },
    { id: 2, value: 0, label: 'Pendente' },
  ]);

  const fetchVeiculosProduzidos = async () => {
    try {
      const resp = await axios.get('http://localhost:3333/veiculosProduzidos');
      const veiculos = resp.data;

      let aprovados = 0;
      let reprovados = 0;
      let pendentes = 0;

      veiculos.forEach((veiculo : any) => {
        switch (veiculo.status) {
          case 'aprovado':
            aprovados++;
            break;
          case 'reprovado':
            reprovados++;
            break;
          case 'pendente':
            pendentes++;
            break;
          default:
            break;
        }
      });

      setQualityData([
        { id: 0, value: aprovados, label: 'Aprovado' },
        { id: 1, value: reprovados, label: 'Reprovado' },
        { id: 2, value: pendentes, label: 'Pendente' },
      ]);
    } catch (error) {
      console.error('Erro ao buscar veículos produzidos:', error);
    }
  };

  useEffect(() => {
    fetchVeiculosProduzidos();
  }, []);

  return (
    <div>
<h1>Qualidade</h1>
    
    <div className='graphic'>
      <PieChart
        colors={['green', 'red', 'gray']}
        series={[
          {
            data: qualityData,
          },
        ]}
        width={400}
        height={400}
      />
    </div>
    </div>
  );
}
