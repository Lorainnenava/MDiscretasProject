import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNodePositions } from "../hooks/useNodePositions";
import { TreeNode } from "../Components/TreeNode";
import { TreePaths } from "../Components/TreePaths";
import { fetchUsers, fetchTreeData } from "../services/treeService";
import type { TreeNodeType } from "../Data/treeData";

export default function DecisionTreePage() {
  const { containerRef, nodeRefs, positions, measure } = useNodePositions();
  const [zoom, setZoom] = useState(1.1);

  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [treeData, setTreeData] = useState<TreeNodeType | null>(null);

  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingTree, setLoadingTree] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch {
        setError("No se pudieron cargar los usuarios.");
      } finally {
        setLoadingUsers(false);
      }
    };
    loadUsers();
  }, []);

useEffect(() => {
  const loadTree = async () => {
    if (!selectedUser) return;
    try {
      setLoadingTree(true);
      const data = await fetchTreeData(selectedUser);
      setTreeData(data);
      setTimeout(() => measure(), 600); 
    } catch (err) {
      console.error(err);
      setError("No se pudo cargar el árbol del usuario.");
    } finally {
      setLoadingTree(false);
    }
  };
  loadTree();
}, [selectedUser]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 2));
    setTimeout(measure, 100);
  };
  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.4));
    setTimeout(measure, 100);
  };

return (
  <div className="w-screen h-screen flex bg-[#001f36] text-white overflow-hidden">
    <div className="w-[20%] min-w-[380px] px-8 py-15 flex flex-col justify-start">
      {loadingUsers ? (
        <p className="text-gray-400 mb-6">Cargando usuarios...</p>
      ) : (
        <select
          value={selectedUser ?? ""}
          onChange={(e) => setSelectedUser(Number(e.target.value))}
          className="bg-[#001f36] border border-[#535bf2] rounded p-2 text-white mb-8 focus:outline-none focus:ring-2 focus:ring-[#646cff] focus:border-transparent "
        >
          <option value="">-- Selecciona un usuario --</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name || `Usuario: ${user.username}`}
            </option>
          ))}
        </select>
      )}
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#646cff] to-[#535bf2] mb-6"
      >
        Árbol de Decisiones
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-base text-gray-300 mb-4"
      >
        Visualiza las preguntas y posibles respuestas de un proceso de manera
        clara y dinámica.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-sm text-gray-400"
      >
        Cada nodo representa una pregunta o respuesta, y las líneas muestran cómo
        se conectan entre sí.
      </motion.p>

      {/* 🔹 Botones de zoom */}
      <div className="flex gap-4 mt-6">
        <button
          className="px-4 py-2 bg-[#646cff] rounded hover:bg-[#535bf2]"
          onClick={handleZoomIn}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-[#646cff] rounded hover:bg-[#535bf2]"
          onClick={handleZoomOut}
        >
          -
        </button>
      </div>

      {error && <p className="text-red-400 mt-4">{error}</p>}
    </div>
    <div
      ref={containerRef}
      className="relative flex-1 flex items-start justify-center overflow-y-auto overflow-x-hidden p-3 w-full max-w-full"
    >
      {!selectedUser ? (
        <motion.p
          className="text-gray-300 text-lg mt-10 tracking-wide text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Selecciona un usuario para visualizar su árbol de decisiones.
        </motion.p>

      ) : loadingTree ? (
        <p className="text-gray-400 text-lg mt-10">Cargando árbol...</p>
      ) : treeData ? (
        <>
          <TreePaths node={treeData} positions={positions} />
          <div className="flex flex-col items-center w-full">
            <TreeNode node={treeData} nodeRefs={nodeRefs} zoom={zoom} />
          </div>
        </>
      ) : (
        <p className="text-gray-400 text-lg mt-10">
          No hay árbol disponible para este usuario.
        </p>
      )}
    </div>
  </div>
);

}
