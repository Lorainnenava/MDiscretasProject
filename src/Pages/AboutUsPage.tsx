import { motion } from "framer-motion";

export default function AboutUsPage() {
  const cards = [
    {
      title: "📚 Fundamentos Matemáticos",
      description:
        "El proyecto se sustenta en los principales modelos de la Matemática Discreta: los diagramas de Venn para representar conjuntos e intersecciones, los grafos para modelar relaciones entre elementos y los árboles de decisión para visualizar caminos lógicos de elección.",
      color: "#0EA5E9",
    },
    {
      title: "🎯 Objetivo del Proyecto",
      description:
        "Este proyecto busca aplicar conceptos de Matemáticas Discretas, como grafos y diagramas de Venn, para analizar de manera visual la información obtenida de una encuesta aplicada a estudiantes y profesores.",
      color: "#3B82F6",
    },
    {
      title: "📊 Dashboard Analítico",
      description:
        "El sistema presenta un dashboard interactivo donde se muestran distribuciones de estudiantes y profesores, junto con intersecciones entre plataformas y roles mediante gráficos dinámicos.",
      color: "#22C55E",
    },
    {
      title: "🌐 Árbol de Decisiones",
      description:
        "Incluye una vista que representa las decisiones de los usuarios usando un grafo 2D. Se pueden filtrar las respuestas por usuario y visualizar los nodos (preguntas, opciones y respuestas).",
      color: "#A855F7",
    },
    {
      title: "🧠 Conceptos Aplicados",
      description:
        "El proyecto combina teoría y práctica utilizando grafos, conjuntos y relaciones para representar la estructura de decisiones y los datos obtenidos de las encuestas.",
      color: "#F59E0B",
    },
    {
      title: "💻 Tecnologías Utilizadas",
      description:
        "React + TypeScript, Tailwind CSS, Chart.js, Framer Motion, React Force Graph y Axios para la comunicación con la API. Todo desarrollado en un entorno rápido y moderno con Vite.",
      color: "#EC4899",
    },
  ];

  const conceptos = [
    {
      title: "🔵 Diagramas de Venn",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Venn0111.svg",
      description:
        "Permiten representar visualmente las relaciones e intersecciones entre conjuntos. En este proyecto, se utilizan para mostrar cómo se cruzan las preferencias entre plataformas o roles.",
    },
    {
      title: "🟣 Árboles de Decisión",
      image:
        "https://www.shutterstock.com/image-vector/decision-tree-machine-learning-color-600nw-2600916119.jpg",
      description:
        "Se utilizan para mostrar el proceso de selección de opciones. Cada nodo representa una pregunta u opción y las ramas reflejan las respuestas del usuario.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Sobre Nosotros 🌱
      </h1>
      <p className="text-gray-300 text-center max-w-3xl mb-12">
        Somos estudiantes de <strong>8.º semestre de Ingeniería de Sistemas</strong>.
        Este proyecto es nuestro trabajo final de <strong>Matemáticas Discretas</strong>, el cual
        aplica análisis de datos y visualizaciones interactivas para llevar la teoría a la práctica.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl p-6 shadow-lg bg-[#1E293B] border-l-4"
            style={{ borderColor: card.color }}
          >
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: card.color }}
            >
              {card.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>


      {/* Nueva sección de conceptos */}
      <h2 className="text-3xl font-bold mt-20 mb-10 text-center">
        🧩 Conceptos Clave Aplicados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {conceptos.map((concept, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1E293B] rounded-2xl shadow-lg overflow-hidden border border-gray-700"
          >
            <img
              src={concept.image}
              alt={concept.title}
              className="w-full h-50 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-[#22C55E]">
                {concept.title}
              </h3>
              <p className="text-gray-300 text-sm">{concept.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <footer className="mt-16 text-gray-500 text-sm text-center">
        © 2025 Proyecto Matemáticas Discretas – Todos los derechos reservados
      </footer>
    </div>
  );
}
