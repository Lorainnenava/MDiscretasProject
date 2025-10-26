import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import type { EstudiantesData } from "../../../types/dashboardTypes";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const BarStudentsLevel: React.FC<{ data: EstudiantesData }> = ({
  data,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!data?.niveles) return;

    const ctx = canvasRef.current;
    if (!ctx) return;

    // Destruir el gráfico anterior si existe
    const existingChart = ChartJS.getChart(ctx);
    if (existingChart) existingChart.destroy();

    // Preparar data
    const labels = Object.keys(data.niveles);
    const totals = Object.values(data.niveles).map((n) => n.total);

    // Crear gráfico
    const chart = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Total de estudiantes",
            data: totals,
            backgroundColor: ["#3B82F6", "#60A5FA", "#93C5FD"],
            borderRadius: 6,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,
          easing: "easeOutQuart",
        },
        plugins: {
          legend: {
            labels: { color: "#FFFFFF", font: { size: 13 } },
          },
          title: {
            display: true,
            text: "Distribución de estudiantes por nivel académico",
            color: "#FFFFFF",
            font: {
              size: 18,
              weight: "bold" as const,
            },
          },
          datalabels: {
            color: "#F8FAFC",
            anchor: "end",
            align: "top",
            font: { weight: "bold" as const },
            formatter: (value: number) => value,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#E2E8F0",
              font: { size: 13 },
            },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
          y: {
            ticks: {
              color: "#E2E8F0",
              font: { size: 12 },
            },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="flex justify-center w-full px-4">
      <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg w-full max-w-3xl h-[400px]">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
