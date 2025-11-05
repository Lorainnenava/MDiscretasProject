import type { SummaryInfo } from "../types/dashboardTypes";

export default function CardComponent({ data }: { data: SummaryInfo[] }) {
  const borderColors = ["#3B82F6", "#22C55E"];

  const getColorByIndex = (index: number) =>
    borderColors[index % borderColors.length];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-4">
      {data?.map((x, index) => {
        const color = getColorByIndex(index);
        return (
          <div
            key={index}
            className="relative rounded-2xl bg-[#1E293B] flex flex-col items-center justify-center p-6 shadow-lg 
                       transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]
                       hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            style={{
              boxShadow: `0 4px 10px rgba(0,0,0,0.3)`,
            }}
          >
            {/* Borde lateral animado */}
            <div
              className="absolute top-0 left-0 h-full w-1.5 rounded-l-2xl transition-all duration-500"
              style={{
                background: `linear-gradient(to bottom, ${color}, ${color}99)`,
              }}
            ></div>

            {/* Contenido principal */}
            <div className="text-center space-y-2">
              <div className="text-4xl font-extrabold text-white tracking-tight drop-shadow-md transition-transform duration-500 group-hover:scale-105">
                {x?.total}
              </div>
              <p className="text-gray-300 text-sm font-medium uppercase tracking-wide">
                {x?.information}
              </p>
            </div>

            {/* Sombra inferior con brillo */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 opacity-70 rounded-b-2xl transition-all duration-500"
              style={{
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              }}
            ></div>

            {/* Brillo sutil al pasar el cursor */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
