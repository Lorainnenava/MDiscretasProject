import type { DataPlataformas } from "../../types/dashboardTypes";
import VennRolPlataforma from "../VeenDiagrams/VennRolPlataforma";

export default function VennGrupoPlataformasProfesores({ data }: { data: DataPlataformas }) {
    const plataformas = data.profesores.plataformas;

    return (
        <>
            {Object.entries(plataformas).map(([nombre, valores]) => (
                <VennRolPlataforma
                    key={nombre}
                    data={{
                        rol: "Profesores",
                        plataforma: nombre,
                        totalRol: data.profesores.total,
                        totalPlataforma: valores.total,
                        interseccion: valores.interseccion,
                    }}
                />
            ))}
        </>
    );
}
