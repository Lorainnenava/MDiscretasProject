import React, { useMemo } from "react";
import ForceGraph2D from "react-force-graph-2d";
import type { EstudiantesData } from "../../types/dashboardTypes";

interface Props {
  data: EstudiantesData;
}

export const AcademicGraph: React.FC<Props> = ({ data }) => {
  const graphData = useMemo(() => {
    if (!data?.niveles) return { nodes: [], links: [] };

    const niveles = Object.entries(data.niveles);

    const nodes = [
      { id: "Estudiantes", group: 1, val: data.total || 10 }, // nodo central
      ...niveles.map(([nombre, valores]) => ({
        id: nombre,
        group: 2,
        val: valores.total || 5, // tamaño por defecto
        interseccion: valores.interseccion ?? 0,
      })),
    ];

    const links = niveles.map(([nombre, valores]) => ({
      source: "Estudiantes",
      target: nombre,
      value: valores.interseccion ?? 1, // valor mínimo por defecto
    }));

    return { nodes, links };
  }, [data]);

  return (
    <div className="bg-[#1E293B] p-4 rounded-2xl shadow-lg flex justify-center items-center">
      <ForceGraph2D
        graphData={graphData}
        nodeLabel={(node) =>
          `${node.id}\nTotal: ${node.val}\nIntersección: ${
            node.interseccion ?? "N/A"
          }`
        }
        nodeAutoColorBy="group"
        nodeRelSize={12}
        nodeVal={(node) => Math.max(5, node.val / 2)} // evita nodos muy pequeños
        linkColor={() => "#64748B"}
        linkWidth={(link) => Math.max(1, link.value / 5)}
        linkDirectionalParticles={1}
        linkDirectionalParticleSpeed={0.015}
        backgroundColor="#1E293B"
      />
    </div>
  );
};
