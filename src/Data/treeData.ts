export interface TreeNodeType {
  id: string;
  label: string;
  isAnswer?: boolean;
  children?: TreeNodeType[];
}

export const treeData: TreeNodeType = {
  id: "root",
  label: "Inicio",
  children: [
    {
      id: "age",
      label: "¿Cuál es tu grupo de edad?",
      children: [
        {
          id: "age1",
          label: "Menos de 20",
          isAnswer: true,
          children: [
            {
              id: "collab",
              label: "¿Con quién colaboras más?",
              children: [
                { id: "juan", label: "Juan", isAnswer: true },
                { id: "carlos", label: "Carlos", isAnswer: true },
                { id: "luis", label: "Luis", isAnswer: true },
                { id: "pedro", label: "Pedro", isAnswer: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "role",
      label: "¿Cuál es tu rol principal?",
      children: [
        {
          id: "est",
          label: "Estudiante",
          isAnswer: true,
          children: [
            {
              id: "nivel",
              label: "¿Cuál es tu nivel académico?",
              children: [
                {
                  id: "uni",
                  label: "Universitario",
                  isAnswer: true,
                  children: [
                    {
                      id: "platform",
                      label: "¿Qué plataforma usas más?",
                      children: [
                        { id: "teams", label: "Teams", isAnswer: true },
                        { id: "zoom", label: "Zoom", isAnswer: true },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "doc",
          label: "Docente",
          isAnswer: true,
          children: [
            {
              id: "materia",
              label: "¿Qué materia enseñas?",
              children: [
                { id: "mate", label: "Matemáticas", isAnswer: true },
                { id: "cien", label: "Ciencias", isAnswer: true },
              ],
            },
          ],
        },
      ],
    },
  ],
};
