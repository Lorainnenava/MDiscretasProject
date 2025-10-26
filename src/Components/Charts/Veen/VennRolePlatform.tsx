import { Chart as ChartJS } from "chart.js/auto";
import { VennDiagramChart } from "chartjs-chart-venn";
import React, { useEffect, useRef } from "react";

ChartJS.register(VennDiagramChart);

interface VennData {
  rol: "Estudiantes" | "Profesores";
  plataforma: string;
  totalRol: number; // total de personas en el rol
  totalPlataforma: number; // total de personas que usan la plataforma
  interseccion: number; // total que pertenecen a ambos grupos
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
            backgroundColor: ["#60A5FA", "#34D399", "#C084FC"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Diagrama de Venn – ${data.rol} ∩ ${data.plataforma}`,
            color: "#FFFFFF",
          },
        },
      },
    };

    new VennDiagramChart(ctx, config);
  }, [data]);

  return (
    <div className="flex justify-center" style={{ width: "600px" }}>
      <div className="bg-[#1E293B] p-4 rounded-2xl shadow-lg w-full max-w-md">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
