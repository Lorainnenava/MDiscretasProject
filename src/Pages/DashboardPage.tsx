import { useState } from "react";
import CarComponent from "../Components/CarComponent";
import VennGrupoNivelAcademico from "../Components/VeenGroups/VennGrupoNivelAcademico";
import VennGrupoPlataformasEstudiantes from "../Components/VeenGroups/VennGrupoPlataformasEstudiantes";
import VennGrupoPlataformasProfesores from "../Components/VeenGroups/VennGrupoPlataformasProfesores";

export default function DashboardPage() {
    const [selectedSet, setSelectedSet] = useState("niveles");
    const [mostrarEstudiantes, setMostrarEstudiantes] = useState(true);
    const [mostrarProfesores, setMostrarProfesores] = useState(false);

    const dataEstudiantes = {
        estudiantes: {
            total: 100,
            niveles: {
                Técnico: { total: 60, interseccion: 40 },
                Tecnológico: { total: 80, interseccion: 50 },
                Universitario: { total: 120, interseccion: 70 },
            },
        },
    };

    const data = {
        estudiantes: {
            total: 100,
            plataformas: {
                WhatsApp: { total: 90, interseccion: 80 },
                Teams: { total: 60, interseccion: 50 },
                Slack: { total: 30, interseccion: 20 },
                Otra: { total: 10, interseccion: 8 },
            },
        },
        profesores: {
            total: 40,
            plataformas: {
                WhatsApp: { total: 35, interseccion: 25 },
                Teams: { total: 30, interseccion: 28 },
                Slack: { total: 15, interseccion: 10 },
                Otra: { total: 5, interseccion: 2 },
            },
        },
    };

    return (
        <div className="w-full pb-10">
            <CarComponent />

            {/* 🎚️ Filtro */}
            <div className="flex justify-start mt-10 pl-4">
                <select
                    value={selectedSet}
                    onChange={(e) => setSelectedSet(e.target.value)}
                    className="w-2/5 appearance-none rounded-md bg-gray-400 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                    <option value="niveles">Estudiantes ↔ Nivel Académico</option>
                    <option value="plataformas">Estudiantes y Profesores ↔ Plataformas</option>
                </select>

                {/* Checks visibles solo si filtro = plataformas */}
                {selectedSet === "plataformas" && (
                    <div className="flex gap-4 items-center ml-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={mostrarEstudiantes}
                                onChange={() => { setMostrarEstudiantes(!mostrarEstudiantes), setMostrarProfesores(!mostrarProfesores) }}
                            />
                            Estudiantes
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={mostrarProfesores}
                                onChange={() => { setMostrarEstudiantes(!mostrarEstudiantes); setMostrarProfesores(!mostrarProfesores) }}
                            />
                            Profesores
                        </label>
                    </div>
                )}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pt-10 shadow-inner">
                {selectedSet === "niveles" ? (
                    <VennGrupoNivelAcademico data={dataEstudiantes} />
                ) : (<>
                    {mostrarEstudiantes ? (
                        <>
                            <VennGrupoPlataformasEstudiantes data={data} />
                        </>) : (<>
                            <VennGrupoPlataformasProfesores data={data} />
                        </>)}
                </>)}
            </div>
        </div>
    );
}
