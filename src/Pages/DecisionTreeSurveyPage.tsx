import React, { useState } from "react";
import { motion } from "framer-motion";
import { treeData } from "../Data/treeDataSurvey";
import { useNodePositionsSurvey } from "../hooks/useNodePositionsSurvey";
import { TreeNode } from "../Components/survey/TreeNodeSurvey";
import { TreePaths } from "../Components/survey/TreePathsSurvey";

export default function DecisionTreeSurveyPage() {
  const { containerRef, nodeRefs, positions, measure } = useNodePositionsSurvey();
  const [zoom, setZoom] = useState(0.65);

  const handleZoomIn = () => { setZoom(prev => Math.min(prev + 0.1, 2)); setTimeout(measure, 0); };
  const handleZoomOut = () => { setZoom(prev => Math.max(prev - 0.1, 0.5)); setTimeout(measure, 0); };

  return (
    <div className="w-screen h-screen flex bg-[#001f36] text-white overflow-hidden">
      {/* PANEL IZQUIERDO */}
      <div className="w-[25%] min-w-[350px] px-10 py-12 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#646cff] to-[#535bf2] mb-6"
        >
          Árbol de Decisiones — Encuestas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-base text-gray-300 mb-4"
        >
          Visualiza las preguntas, opciones y respuestas de la encuesta de forma clara y jerárquica.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-sm text-gray-400"
        >
          Cada nodo representa una pregunta, una opción o el número de personas que seleccionaron esa opción.
        </motion.p>

        <div className="flex gap-4 mt-6">
          <button className="px-4 py-2 bg-[#646cff] rounded hover:bg-[#535bf2]" onClick={handleZoomIn}>+</button>
          <button className="px-4 py-2 bg-[#646cff] rounded hover:bg-[#535bf2]" onClick={handleZoomOut}>-</button>
        </div>
      </div>

      {/* ÁRBOL */}
      <div
        ref={containerRef}
        className="relative flex-1 flex items-start justify-center overflow-y-auto overflow-x-hidden p-8"
      >
        <TreePaths node={treeData} positions={positions} />
        <div className="flex flex-col items-center w-full">
          <TreeNode node={treeData} nodeRefs={nodeRefs} zoom={zoom} />
        </div>
      </div>
    </div>
  );
}
