import React, { useState } from "react";
import { motion } from "framer-motion";
import { treeData } from "../Data/treeData";
import { useNodePositions } from "../hooks/useNodePositions";
import { TreeNode } from "../Components/TreeNode";
import { TreePaths } from "../Components/TreePaths";

export default function DecisionTreePage() {
  const { containerRef, nodeRefs, positions, measure } = useNodePositions();
  const [zoom, setZoom] = useState(0.6); // Carga inicial pequeña

  const handleZoomIn = () => { setZoom(prev => Math.min(prev + 0.1, 2)); setTimeout(measure, 0); };
  const handleZoomOut = () => { setZoom(prev => Math.max(prev - 0.1, 0.5)); setTimeout(measure, 0); };

  return (
    <div className="w-screen h-screen flex bg-[#001f36] text-white overflow-hidden">
      {/* Descripción + zoom */}
      <div className="w-[25%] min-w-[350px] px-10 py-12 flex flex-col justify-center">
        <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#646cff] to-[#535bf2] mb-6"
        >Árbol de Decisiones</motion.h1>
        <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-base text-gray-300 mb-4"
        >Visualiza las preguntas y posibles respuestas de un proceso de manera clara y dinámica.</motion.p>
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-sm text-gray-400"
        >Cada nodo representa una pregunta o respuesta, y las líneas muestran cómo se conectan entre sí.</motion.p>

        <div className="flex gap-4 mt-6">
          <button className="px-4 py-2 bg-[#646cff] rounded hover:bg-[#535bf2]" onClick={handleZoomIn}>+</button>
          <button className="px-4 py-2 bg-[#646cff] rounded hover:bg-[#535bf2]" onClick={handleZoomOut}>-</button>
        </div>
      </div>

      {/* Árbol */}
<div
  ref={containerRef}
  className="relative flex-1 flex items-start justify-center overflow-y-auto overflow-x-hidden p-6 w-full max-w-full">
        <TreePaths node={treeData} positions={positions} />
        <div className="flex flex-col items-center w-full">
          <TreeNode node={treeData} nodeRefs={nodeRefs} zoom={zoom} />
        </div>
      </div>
    </div>
  );
}
