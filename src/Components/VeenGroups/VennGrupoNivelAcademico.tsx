import type { EstudiantesData } from "../../types/dashboardTypes";
import VennEstudiantesComparacion from "../VeenDiagrams/VennEstudiantesComparacion";

export default function VennGrupoNivelAcademico({ data }: { data: EstudiantesData }) {
    return (
        <>
            <VennEstudiantesComparacion data={{
                estudiantes: data.estudiantes.total,
                grupo: "Técnico",
                comparacion: data.estudiantes.niveles.Técnico.total,
                interseccion: data.estudiantes.niveles.Técnico.interseccion
            }} />
            <VennEstudiantesComparacion data={{
                estudiantes: data.estudiantes.total,
                grupo: "Tecnologico",
                comparacion: data.estudiantes.niveles.Tecnológico.total,
                interseccion: data.estudiantes.niveles.Tecnológico.interseccion
            }} />
            <VennEstudiantesComparacion data={{
                estudiantes: data.estudiantes.total,
                grupo: "Universitario",
                comparacion: data.estudiantes.niveles.Universitario.total,
                interseccion: data.estudiantes.niveles.Universitario.interseccion
            }} />
        </>
    )
}
