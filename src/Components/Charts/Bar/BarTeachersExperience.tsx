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
import type { ProfesoresData } from "../../../types/dashboardTypes";

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

export const BarTeachersExperience: React.FC<{ data: ProfesoresData }> = ({
  data,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!data?.Experiencia) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (chartInstanceRef.current) chartInstanceRef.current.destroy();

    const labels = Object.keys(data.Experiencia);
    const totals = Object.values(data.Experiencia).map((n) => n.total);

    chartInstanceRef.current = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Total de Profesores",
            data: totals,
            backgroundColor: ["#3B82F6", "#60A5FA", "#93C5FD"],
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
            text: "Distribución de Profesores por Años de Experiencia",
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
            borderColor: "#3B82F6",
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

    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    };
  }, [data]);

  return (
    <div className="flex justify-center w-full px-4">
      <div className="bg-[#1E293B] p-6 rounded-2xl shadow-xl w-full max-w-3xl h-[400px] transition-transform duration-300 hover:scale-[1.02]">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
