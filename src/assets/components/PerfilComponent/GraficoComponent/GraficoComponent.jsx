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

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

export default function GraficoComponent() {
  const [labels, setLabels] = useState([]);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://2daw14.iesalonsocano.org/api/?ruta=historico_peso&usuario_id=5')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const fechas = data.pesos.map(p => p.fecha);
          const pesos = data.pesos.map(p => parseFloat(p.peso));
          setLabels(fechas);
          setDatos(pesos);
        }
      })
      .catch((err) => console.error('Error al cargar los datos:', err));
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Peso (kg)',
        data: datos,
        borderColor: '#fcc601',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        tension: 0.3,
        fill: false,
        pointRadius: 5,
        pointBackgroundColor: '#fcc601',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Histórico de peso'
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Fecha'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Peso (kg)'
        },
        beginAtZero: false
      }
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '700px', margin: 'auto' }}>
      <Line data={data} options={options} />
    </div>
  );
}
