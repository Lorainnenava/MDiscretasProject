import type { ProfesoresData } from "../../types/dashboardTypes";
import { VennRolePlatform } from "../Charts/Veen/VennRolePlatform";

export default function VennTeachersByPlatform({
  data,
}: {
  data: ProfesoresData;
}) {
  const plataformas = data?.plataformas;

  if (!plataformas) return null;

  return (
    <>
      {Object?.entries(plataformas)?.map(([nombre, valores]) => (
        <VennRolePlatform
          key={nombre}
          data={{
            rol: "Profesores",
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
