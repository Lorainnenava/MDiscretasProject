import type { EstudiantesData } from "../../types/dashboardTypes";
import { VennRolePlatform } from "../Charts/Veen/VennRolePlatform";

export default function VennPlatformsStudentsGroup({
  data,
}: {
  data: EstudiantesData;
}) {
  const plataformas = data?.plataformas;

  if (!plataformas) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
      {Object?.entries(plataformas)?.map(([nombre, valores]) => (
        <VennRolePlatform
          key={nombre}
          data={{
            rol: "Estudiantes",
            plataforma: nombre,
            totalRol: data?.total,
            totalPlataforma: valores?.total,
            interseccion: valores?.interseccion,
          }}
        />
      ))}
    </div>
  );
}
