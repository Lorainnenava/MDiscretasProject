import { useEffect, useState } from "react";
import api from "../Api/api";
import CarComponent from "../Components/CarComponent";
import { BarStudentsLevel } from "../Components/Charts/Bar/BarStudentsLevel";
import VennPlatformsStudentsGroup from "../Components/VeenGroups/VennPlatformsStudentsGroup";
import VennTeachersByPlatform from "../Components/VeenGroups/VennTeachersByPlatform";
import type { DashboardData } from "../types/dashboardTypes";
import { EducationalSection } from "../Components/EducationalSection";
import { AcademicGraph } from "../Components/Charts/AcademicGraph";

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
      <div className="flex justify-start mt-10 pl-4 gap-4 items-center">
        <select
          value={selectedView}
          onChange={(e) =>
            setSelectedView(e.target.value as "niveles" | "plataformas")
          }
          className="w-80 appearance-none rounded-md bg-gray-400 py-1.5 pr-8 pl-3 text-base text-black outline-1 outline-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
        >
          <option value="niveles">Estudiantes por nivel académico</option>
          <option value="plataformas">Plataformas ↔ Roles</option>
        </select>

        {selectedView === "plataformas" && (
          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-2 text-white">
              <input
                type="radio"
                name="roleView"
                checked={showStudents}
                onChange={() => setShowStudents(true)}
              />
              Estudiantes
            </label>
            <label className="flex items-center gap-2 text-white">
              <input
                type="radio"
                name="roleView"
                checked={!showStudents}
                onChange={() => setShowStudents(false)}
              />
              Profesores
            </label>
          </div>
        )}
      </div>

      {/* 📊 Sección de gráficos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pt-10 shadow-inner">
        {selectedView === "niveles" && dataDashboard?.details?.estudiantes && (
          <>
            <BarStudentsLevel data={dataDashboard.details.estudiantes} />
            <div className="flex flex-col gap-6 h-[400px]">
              <AcademicGraph data={dataDashboard?.details?.estudiantes} />
              <EducationalSection />
            </div>
          </>
        )}

        {selectedView === "plataformas" && showStudents && (
          <VennPlatformsStudentsGroup
            data={dataDashboard?.details?.estudiantes}
          />
        )}

        {selectedView === "plataformas" && !showStudents && (
          <VennTeachersByPlatform data={dataDashboard?.details?.profesores} />
        )}
      </div>
    </div>
  );
}
