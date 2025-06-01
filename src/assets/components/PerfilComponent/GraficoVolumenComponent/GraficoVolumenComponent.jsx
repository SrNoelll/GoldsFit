import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

export default function GraficoVolumenComponent({ usuarioId }) {
  const [labels, setLabels] = useState([]);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    if (!usuarioId) return;

    fetch(`https://2daw14.iesalonsocano.org/api/?ruta=obtenerHistorialVolumen&idUsuario=${usuarioId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const fechas = data.volumenes.map(v => v.fecha);
          const volumenes = data.volumenes.map(v => parseFloat(v.peso));
          setLabels(fechas);
          setDatos(volumenes);
        }
      })
      .catch((err) => console.error('Error al cargar los datos:', err));
  }, [usuarioId]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Volumen Total',
        data: datos,
        borderColor: '#fcc601',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.3,
        fill: false,
        pointRadius: 4,
        pointBackgroundColor: '#fcc601',
      }
    ],
  };

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Histórico de Volumen de Entrenamiento'
    },
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Fecha',
      }
    },
    y: {
      title: {
        display: true,
        text: 'Volumen (kg)',
      },
      beginAtZero: true,
    }
  }
};

  return (
        
      <div className='col-12'>
        <Line data={data} options={options} />
      </div>

  );
}
