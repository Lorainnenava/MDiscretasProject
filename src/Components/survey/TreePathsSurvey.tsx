import React, { useMemo } from "react";
import { motion } from "framer-motion";
import type { TreeNodeType } from "../../Data/treeDataSurvey";
import type { Pos } from "../../hooks/useNodePositionsSurvey";

interface TreePathsProps {
  node: TreeNodeType;
  positions: Record<string, Pos>;
}

export const TreePaths: React.FC<TreePathsProps> = ({ node, positions }) => {
  const paths = useMemo(() => {
    const result: { d: string; key: string; color: string }[] = [];

    const buildPaths = (node: TreeNodeType) => {
      if (!node.children) return;
      const ppos = positions[node.id];
      if (!ppos) return;

      node.children.forEach((child) => {
        const cpos = positions[child.id];
        if (!cpos) return;

        const x1 = ppos.x + ppos.width / 2;
        const y1 = ppos.y + ppos.height;
        const x2 = cpos.x + cpos.width / 2;
        const y2 = cpos.y;

        const midY = y1 + (y2 - y1) / 2;

        result.push({
          d: `M ${x1},${y1} C ${x1},${midY} ${x2},${midY} ${x2},${y2}`,
          key: `${node.id}-${child.id}`,
          color: node.isAnswer ? "#22c55e" : "#646cff",
        });

        buildPaths(child);
      });
    };

    buildPaths(node);
    return result;
  }, [node, positions]);

  // 🔹 Si aún no hay posiciones medidas, no dibujar nada
  if (!Object.keys(positions).length) return null;

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {paths.map((p) => (
        <motion.path
          key={p.key}
          d={p.d}
          stroke={p.color}
          strokeWidth={2}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
};
