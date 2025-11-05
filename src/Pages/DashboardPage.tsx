import { useEffect, useState } from "react";
import api from "../Api/api";
import CarComponent from "../Components/CarComponent";
import { BarStudentsLevel } from "../Components/Charts/Bar/BarStudentsLevel";
import { BarTeachersExperience } from "../Components/Charts/Bar/BarTeachersExperience";
import VennPlatformsStudentsGroup from "../Components/VeenGroups/VennPlatformsStudentsGroup";
import VennTeachersByPlatform from "../Components/VeenGroups/VennTeachersByPlatform";
import type { DashboardData } from "../types/dashboardTypes";

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [dataDashboard, setDataDashboard] = useState<DashboardData>(
    {} as DashboardData
  );
  const [selectedView, setSelectedView] = useState<"niveles" | "plataformas">(
    "niveles"
  );
  const [showStudents, setShowStudents] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get<DashboardData>("/venn_data");
        setDataDashboard(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full pb-10">
      {/* 🧩 Sección de Cards */}
      <CarComponent data={dataDashboard?.summary} />

      {/* 🎚️ Filtro de vista */}
      <div className="flex flex-wrap justify-start mt-10 ml-4 pl-4 gap-4 items-center bg-[#1E293B] border border-gray-700 rounded-xl shadow-md p-4 w-fit">
        <select
          value={selectedView}
          onChange={(e) =>
            setSelectedView(e.target.value as "niveles" | "plataformas")
          }
          className="w-120 rounded-lg bg-gray-800 text-gray-100 py-2 pl-3 pr-10 text-sm shadow-inner border border-gray-600 hover:border-[#22C55E] focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/40 outline-none transition-all duration-300"
        >
          <option value="niveles">
            Estudiantes por nivel académico y profesores por experiencia
          </option>
          <option value="plataformas">Plataformas ↔ Roles</option>
        </select>

        {selectedView === "plataformas" && (
          <div className="flex gap-6 items-center">
            <label className="flex items-center gap-2 text-gray-200 cursor-pointer hover:text-[#22C55E] transition-colors">
              <input
                type="radio"
                name="roleView"
                checked={showStudents}
                onChange={() => setShowStudents(true)}
                className="accent-[#22C55E] w-4 h-4"
              />
              Estudiantes
            </label>
            <label className="flex items-center gap-2 text-gray-200 cursor-pointer hover:text-[#22C55E] transition-colors">
              <input
                type="radio"
                name="roleView"
                checked={!showStudents}
                onChange={() => setShowStudents(false)}
                className="accent-[#22C55E] w-4 h-4"
              />
              Profesores
            </label>
          </div>
        )}
      </div>

      {/* 📊 Sección de gráficos */}
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pt-10 shadow-inner">
          {selectedView === "niveles" && dataDashboard?.details?.estudiantes && dataDashboard?.details.profesores && (
            <>
              <BarTeachersExperience data={dataDashboard.details.profesores} />
              <BarStudentsLevel data={dataDashboard.details.estudiantes} />
            </>
          )}
        </div>

        <div className="w-full flex flex-col items-center justify-center bg-transparent">
          {selectedView === "plataformas" && showStudents && (
            <VennPlatformsStudentsGroup
              data={dataDashboard?.details?.estudiantes}
            />
          )}

          {selectedView === "plataformas" && !showStudents && (
            <VennTeachersByPlatform
              data={dataDashboard?.details?.profesores}
            />
          )}
        </div>
      </>
    </div>
  );
}
