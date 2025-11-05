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

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const existingChart = ChartJS.getChart(ctx);
    if (existingChart) existingChart.destroy();

    const labels = Object.keys(data.niveles);
    const totals = Object.values(data.niveles).map((n) => n.total);

    const chart = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Total de Estudiantes",
            data: totals,
            backgroundColor: ["#22C55E", "#4ADE80", "#86EFAC"],
            borderRadius: 10,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1500, easing: "easeOutQuart" },
        plugins: {
          legend: {
            display: true,
            labels: { color: "#E2E8F0", font: { size: 14 } },
          },
          title: {
            display: true,
            text: "Distribución de Estudiantes por Nivel Académico",
            color: "#FFFFFF",
            font: { size: 18, weight: "bold" },
            padding: { top: 10, bottom: 20 },
          },
          datalabels: {
            color: "#F8FAFC",
            anchor: "end",
            align: "start",
            offset: -4,
            font: { weight: "bold", size: 14 },
            formatter: (value: number) => value,
          },
          tooltip: {
            backgroundColor: "#1E293B",
            titleColor: "#F1F5F9",
            bodyColor: "#E2E8F0",
            borderColor: "#22C55E",
            borderWidth: 1,
            cornerRadius: 10,
          },
        },
        scales: {
          x: {
            ticks: { color: "#E2E8F0", font: { size: 13 } },
            grid: { color: "rgba(255,255,255,0.08)" },
          },
          y: {
            beginAtZero: true,
            ticks: { color: "#E2E8F0", font: { size: 12 } },
            grid: { color: "rgba(255,255,255,0.08)" },
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <div className="flex justify-center w-full px-4">
      <div className="bg-[#1E293B] p-6 rounded-2xl shadow-xl w-full max-w-3xl h-[400px] transition-transform duration-300 hover:scale-[1.02]">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
