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
    // Pregunta 1
    {
      id: "rol",
      label: "¿Cuál es tu rol principal?",
      children: [
        {
          id: "rol_estudiante",
          label: "Estudiante",
          isAnswer: true,
          children: [
            { id: "rol_estudiante_count", label: "45 respuestas", isAnswer: true },
          ],
        },
        {
          id: "rol_profesor",
          label: "Profesor",
          isAnswer: true,
          children: [
            { id: "rol_profesor_count", label: "22 respuestas", isAnswer: true },
          ],
        },
      ],
    },

    // Pregunta 2
    {
      id: "nivel",
      label: "¿Cuál es tu nivel académico dentro de la institución?",
      children: [
        {
          id: "nivel_tecnico",
          label: "Programa técnico",
          isAnswer: true,
          children: [
            { id: "nivel_tecnico_count", label: "15 respuestas", isAnswer: true },
          ],
        },
        {
          id: "nivel_tecnologico",
          label: "Programa tecnológico",
          isAnswer: true,
          children: [
            { id: "nivel_tecnologico_count", label: "20 respuestas", isAnswer: true },
          ],
        },
        {
          id: "nivel_universitario",
          label: "Universitario",
          isAnswer: true,
          children: [
            { id: "nivel_universitario_count", label: "32 respuestas", isAnswer: true },
          ],
        },
      ],
    },

    // Pregunta 3
    {
      id: "docencia",
      label: "¿Cuánto tiempo llevas desempeñándote en el campo de la docencia?",
      children: [
        {
          id: "docencia_menos10",
          label: "Menos de 10 años",
          isAnswer: true,
          children: [
            { id: "docencia_menos10_count", label: "18 respuestas", isAnswer: true },
          ],
        },
        {
          id: "docencia_10_20",
          label: "Entre 10 y 20 años",
          isAnswer: true,
          children: [
            { id: "docencia_10_20_count", label: "9 respuestas", isAnswer: true },
          ],
        },
        {
          id: "docencia_20mas",
          label: "Más de 20 años",
          isAnswer: true,
          children: [
            { id: "docencia_20mas_count", label: "6 respuestas", isAnswer: true },
          ],
        },
      ],
    },

    // Pregunta 4
    {
      id: "edad",
      label: "¿Cuál es tu grupo de edad?",
      children: [
        {
          id: "edad_menos20",
          label: "Menos de 20",
          isAnswer: true,
          children: [
            { id: "edad_menos20_count", label: "10 respuestas", isAnswer: true },
          ],
        },
        {
          id: "edad_20_29",
          label: "20–29",
          isAnswer: true,
          children: [
            { id: "edad_20_29_count", label: "30 respuestas", isAnswer: true },
          ],
        },
        {
          id: "edad_30_39",
          label: "30–39",
          isAnswer: true,
          children: [
            { id: "edad_30_39_count", label: "20 respuestas", isAnswer: true },
          ],
        },
        {
          id: "edad_40mas",
          label: "40 o más",
          isAnswer: true,
          children: [
            { id: "edad_40mas_count", label: "12 respuestas", isAnswer: true },
          ],
        },
      ],
    },

    // Pregunta 5
    {
      id: "plataforma",
      label: "¿Qué plataforma o medio utilizas con mayor frecuencia?",
      children: [
        {
          id: "plataforma_whatsapp",
          label: "WhatsApp",
          isAnswer: true,
          children: [
            { id: "plataforma_whatsapp_count", label: "40 respuestas", isAnswer: true },
          ],
        },
        {
          id: "plataforma_teams",
          label: "Teams",
          isAnswer: true,
          children: [
            { id: "plataforma_teams_count", label: "12 respuestas", isAnswer: true },
          ],
        },
        {
          id: "plataforma_slack",
          label: "Slack",
          isAnswer: true,
          children: [
            { id: "plataforma_slack_count", label: "5 respuestas", isAnswer: true },
          ],
        },
        {
          id: "plataforma_otra",
          label: "Otra",
          isAnswer: true,
          children: [
            { id: "plataforma_otra_count", label: "8 respuestas", isAnswer: true },
          ],
        },
      ],
    },
  ],
};
