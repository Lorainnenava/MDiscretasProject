import React from "react";
import { motion } from "framer-motion";
import type { TreeNodeType } from "../../Data/treeDataSurvey";

interface TreeNodeProps {
  node: TreeNodeType;
  nodeRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
  zoom: number;
  measure: () => void; // ✅ agregado
}

const questionColors = {
  border: "#6f73ff",
  shadow: "rgba(100,108,255,0.4)",
  bgFrom: "#001f36",
  bgTo: "#3b3eff",
};

const answerColors = {
  border: "#2dd4bf",
  shadow: "rgba(45,212,191,0.4)",
  bgFrom: "#0f766e",
  bgTo: "#001f36",
};

export const TreeNode: React.FC<TreeNodeProps> = ({ node, nodeRefs, zoom, measure }) => {
  const colorSet = node.isAnswer ? answerColors : questionColors;
  const size = 140 * zoom;
  const fontSize = 1.1 * zoom + "rem";
  const padding = 10 * zoom;
  const marginTop = 70 * zoom; 
  const gap = 30 * zoom;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={(el) => { nodeRefs.current[node.id] = el; }}
        initial={{ opacity: 0, scale: 0.7, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onAnimationComplete={() => measure()} // ✅ aquí
      >
    <motion.div
        className="group relative flex items-center justify-center rounded-full text-center border-2 font-semibold cursor-pointer select-none"
        style={{
          width: size,
          height: size,
          padding,
          fontSize,
          color: "#f9fafb",
          lineHeight: "1.3rem",
          borderColor: colorSet.border,
          background: `linear-gradient(145deg, ${colorSet.bgFrom}, ${colorSet.bgTo})`,
          boxShadow: `0 6px 16px ${colorSet.shadow}`,
          textShadow: "0 1px 3px rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        whileHover={{ scale: 1.07 }}
        animate={{
          scale: [1, 1.03, 1],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <p
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {node.label}
        </p>
        {/* tooltip */}
        <div className="absolute hidden group-hover:flex z-50 w-max max-w-xs px-3 py-2 bg-[#001f36] border border-[#6f73ff] rounded-xl text-xs text-white shadow-xl -left-2 left-1/2 -translate-x-1/2 translate-y-full">
          {node.label}
        </div>
      </motion.div>
         </motion.div>

      {node.children && (
        <div
          className="flex justify-center flex-wrap"
          style={{ marginTop, gap }}
        >
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} nodeRefs={nodeRefs} zoom={zoom} measure={measure} />
          ))}
        </div>
      )}
    </div>
  );
};
