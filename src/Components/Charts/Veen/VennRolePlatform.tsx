import { Chart as ChartJS } from "chart.js/auto";
import { VennDiagramChart } from "chartjs-chart-venn";
import React, { useEffect, useRef } from "react";

ChartJS.register(VennDiagramChart);

interface VennData {
  rol: "Estudiantes" | "Profesores";
  plataforma: string;
  totalRol: number;
  totalPlataforma: number;
  interseccion: number;
}

export const VennRolePlatform: React.FC<{ data: VennData }> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    const existing = ChartJS.getChart(ctx);
    if (existing) existing.destroy();

    const config = {
      type: "venn",
      data: {
        labels: [data.rol, data.plataforma],
        datasets: [
          {
            label: `${data.rol} ∩ ${data.plataforma}`,
            data: [
              { sets: [data.rol], value: data.totalRol },
              { sets: [data.plataforma], value: data.totalPlataforma },
              { sets: [data.rol, data.plataforma], value: data.interseccion },
            ],
            backgroundColor: ["#3B82F6", "#22C55E", "#93C5FD"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // 🔹 permite ajustar tamaño libremente
        plugins: {
          title: {
            display: true,
            text: `Diagrama de Venn – ${data.rol} ∩ ${data.plataforma}`,
            color: "#FFFFFF",

          },
          legend: {
            labels: { color: "#FFFFFF" },
          },
        },
      },
    };

    new VennDiagramChart(ctx, config);
  }, [data]);

  return (
    <div className="flex justify-center">
      <div
        className="bg-[#1E293B] p-6 rounded-2xl shadow-lg w-[520px] h-[320px] mx-3 my-4"
      >
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
