import type { SummaryInfo } from "../types/dashboardTypes";

export default function CardComponent({ data }: { data: SummaryInfo[] }) {
  // Paleta de colores suaves para bordes
  const borderColors = [
    "#3B82F6",
    "#22C55E",
    "#FACC15",
    "#EF4444",
    "#A855F7",
    "#FB923C",
  ];

  // Devuelve un color según el índice (para evitar aleatoriedad entre renders)
  const getColorByIndex = (index: number) =>
    borderColors[index % borderColors.length];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 px-4 mt-0">
      {data?.map((x, index) => {
        const color = getColorByIndex(index);
        return (
          <div
            key={index}
            className="relative rounded-2xl bg-[#1E293B] flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Borde izquierdo */}
            <div
              className="absolute top-0 left-0 h-full w-2 rounded-l-2xl"
              style={{ backgroundColor: color }}
            ></div>

            {/* Contenido principal */}
            <div className="text-center space-y-2">
              <div className="text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                {x?.total}
              </div>
              <p className="text-gray-300 text-sm font-medium uppercase tracking-wide">
                {x?.information}
              </p>
            </div>

            {/* Sombra inferior de color (efecto de brillo) */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 opacity-50 rounded-b-2xl"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
