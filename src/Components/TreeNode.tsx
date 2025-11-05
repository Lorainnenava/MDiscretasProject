import React from "react";
import { motion } from "framer-motion";
import type { TreeNodeType } from "../Data/treeData";

interface TreeNodeProps {
  node: TreeNodeType;
  nodeRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
  zoom: number;
}

const questionColors = {
  border: "#646cff",
  shadow: "#535bf2",
  bgFrom: "#001f36",
  bgTo: "#535bf2",
};

const answerColors = {
  border: "#22c55e",
  shadow: "#15803d",
  bgFrom: "#16a34a",
  bgTo: "#001f36",
};

export const TreeNode: React.FC<TreeNodeProps> = ({ node, nodeRefs, zoom }) => {
  const colorSet = node.isAnswer ? answerColors : questionColors;
  const size = 130 * zoom;
  const fontSize = 0.9 * zoom + "rem";
  const padding = 10 * zoom;
  const marginTop = 56 * zoom;
  const gap = 10 * zoom;

  return (
    <div className="flex flex-col items-center">
<motion.div
  ref={(el) => { nodeRefs.current[node.id] = el }}
  initial={{ opacity: 0, scale: 0.7, y: -20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
  className="flex items-center justify-center rounded-full text-center border-2 font-semibold cursor-pointer"
  style={{
    width: size,
    height: size,
    padding,
    fontSize,
    lineHeight: "1.2rem",
    color: "#f9fafb",
    overflow: "hidden",
    borderColor: colorSet.border,
    background: `linear-gradient(to bottom, ${colorSet.bgFrom}, ${colorSet.bgTo})`,
    boxShadow: `0 6px 18px ${colorSet.shadow}`,
    textShadow: "0 1px 4px rgba(0,0,0,0.3)",
    wordWrap: "break-word",
    whiteSpace: "normal",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  }}
  whileHover={{ scale: 1.05 }}
>
  <span
    style={{
      display: "inline-block",
      maxWidth: "90%",
      wordBreak: "break-word",
      fontSize:
        node.label.length > 40
          ? `${0.6 * zoom}rem`
          : node.label.length > 25
          ? `${0.75 * zoom}rem`
          : `${0.9 * zoom}rem`,
    }}
  >
    {node.label}
  </span>
</motion.div>


      {node.children && (
        <div className="flex justify-center" style={{ marginTop, gap }}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} nodeRefs={nodeRefs} zoom={zoom} />
          ))}
        </div>
      )}
    </div>
  );
};
