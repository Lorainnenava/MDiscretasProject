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
    <>
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
    </>
  );
}
