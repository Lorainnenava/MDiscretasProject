import { Chart as ChartJS } from "chart.js/auto";
import { VennDiagramChart } from "chartjs-chart-venn";
import React, { useEffect, useRef } from "react";

ChartJS.register(VennDiagramChart);

interface VennData {
  estudiantes: number;
  comparacion: number; // Cantidad del otro grupo (técnico, tecnológico o universitario)
  interseccion: number; // Cantidad de estudiantes que pertenecen a ambos grupos
  grupo: string; // Nombre del grupo comparado (ej. "Técnico", "Tecnológico", "Universitario")
}

const VennEstudiantesComparacion: React.FC<{ data: VennData }> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    const existing = ChartJS.getChart(ctx);
    if (existing) existing.destroy();

    const config = {
      type: "venn",
      data: {
        labels: ["Estudiantes", data.grupo],
        datasets: [
          {
            label: `Estudiantes ∩ ${data.grupo}`,
            data: [
              { sets: ["Estudiantes"], value: data.estudiantes },
              { sets: [data.grupo], value: data.comparacion },
              { sets: ["Estudiantes", data.grupo], value: data.interseccion },
            ],
            backgroundColor: ["#60A5FA", "#34D399", "#C084FC"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Diagrama de Venn – Estudiantes ∩ ${data.grupo}`,
            color: "#FFFFFF",
          },
        },
      },
    };

    new VennDiagramChart(ctx, config);
  }, [data]);

  return (
    <div className="flex justify-center" style={{ width: '600px' }}>
      <div className="bg-[#1E293B] p-4 rounded-2xl shadow-lg w-full max-w-lg">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default VennEstudiantesComparacion;
