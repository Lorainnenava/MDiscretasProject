import { useState, useEffect } from "react";
import { fetchQuestionsSummary } from "../services/treeService";
import { useNodePositionsSurvey } from "../hooks/useNodePositionsSurvey";
import { TreeNode } from "../Components/survey/TreeNodeSurvey";
import { TreePaths } from "../Components/survey/TreePathsSurvey";
import type { TreeNodeType } from "../Data/treeDataSurvey";

export default function DecisionTreeSurveyPage() {
  const { containerRef, nodeRefs, positions, measure, isReady } = useNodePositionsSurvey();
  const [zoom, setZoom] = useState(0.7);
  const [treeData, setTreeData] = useState<TreeNodeType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 2));
    setTimeout(measure, 0);
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.5));
    setTimeout(measure, 0);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchQuestionsSummary();
        setTreeData(data);
      } catch (err: any) {
        console.error("Error al cargar datos:", err);
        setError("No se pudieron cargar los datos del árbol de decisiones.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#001f36] text-white">
        <p className="text-lg">Cargando árbol de decisiones...</p>
      </div>
    );
  }

  if (error || !treeData) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#001f36] text-red-400">
        <p>{error || "No hay datos disponibles"}</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex bg-[#001f36] text-white overflow-hidden">
      <div
        ref={containerRef}
        className="relative flex-1 flex items-start justify-center overflow-y-auto overflow-x-hidden p-8"
      >
        {/* 🔹 Botones de zoom */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
          <button
            className="w-8 h-8 bg-[#646cff] rounded-md hover:bg-[#535bf2] flex items-center justify-center font-bold text-lg shadow-md"
            onClick={handleZoomIn}
          >
            +
          </button>
          <button
            className="w-8 h-8 bg-[#646cff] rounded-md hover:bg-[#535bf2] flex items-center justify-center font-bold text-lg shadow-md"
            onClick={handleZoomOut}
          >
            −
          </button>
        </div>

      {isReady && <TreePaths node={treeData} positions={positions} />}
      <div className="flex flex-col items-center w-max">
        <TreeNode node={treeData} nodeRefs={nodeRefs} zoom={zoom} measure={measure}/>
      </div>

      </div>
    </div>
  );
}
