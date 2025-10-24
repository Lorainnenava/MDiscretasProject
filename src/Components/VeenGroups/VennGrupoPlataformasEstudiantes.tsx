import type { DataPlataformas } from "../../types/dashboardTypes";
import VennRolPlataforma from "../VeenDiagrams/VennRolPlataforma";

export default function VennGrupoPlataformasEstudiantes({ data }: { data: DataPlataformas }) {
    const plataformas = data.estudiantes.plataformas;

    return (
        <>
            {Object.entries(plataformas).map(([nombre, valores]) => (
                <VennRolPlataforma
                    key={nombre}
                    data={{
                        rol: "Estudiantes",
                        plataforma: nombre,
                        totalRol: data.estudiantes.total,
                        totalPlataforma: valores.total,
                        interseccion: valores.interseccion,
                    }}
                />
            ))}
        </>
    );
}
