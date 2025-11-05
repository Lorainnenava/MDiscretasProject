import axios from "axios";
import type { TreeNodeType } from "../Data/treeData";

const API_BASE = "https://proyecto-universidad.onrender.com/api";

// 🔹 Traer todos los usuarios
export async function fetchUsers() {
  const response = await axios.get(`${API_BASE}/v1/users/`);
  return response.data;
}

// 🔹 Traer el árbol de decisiones de un usuario específico
export async function fetchTreeData(userId: number): Promise<TreeNodeType> {
  const response = await axios.get(`${API_BASE}/v2/survey_tree/${userId}`);
  return response.data;
}
export async function fetchQuestionsSummary(): Promise<TreeNodeType> {
  const response = await axios.get(`${API_BASE}/v2/questions_summary`);
  return response.data;
}


