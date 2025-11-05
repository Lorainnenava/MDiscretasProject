import { motion } from "framer-motion";

export default function AboutUsPage() {
  const cards = [
    {
      title: "📚 Fundamentos Matemáticos",
      description:
        "Este proyecto se basa en los conceptos fundamentales de la Matemática Discreta, específicamente en los diagramas de Venn para representar conjuntos e intersecciones, y los árboles para modelar decisiones o relaciones jerárquicas.",
      color: "#0EA5E9",
    },
    {
      title: "🎯 Objetivo del Proyecto",
      description:
        "El propósito del proyecto es aplicar los conceptos de conjuntos y árboles para analizar y visualizar los resultados de una encuesta realizada a estudiantes y profesores, utilizando representaciones gráficas claras e interactivas.",
      color: "#3B82F6",
    },
    {
      title: "📊 Dashboard Interactivo",
      description:
        "Se desarrolló un dashboard dinámico que permite visualizar la distribución de los datos mediante diagramas de Venn y estructuras de árbol. Los usuarios pueden comparar conjuntos y explorar relaciones de manera intuitiva.",
      color: "#22C55E",
    },
    {
      title: "🌳 Árboles",
      description:
        "Los árboles representan rutas de decisión o jerarquías entre categorías. En este proyecto, se utilizan para mostrar las relaciones entre las respuestas o niveles de un grupo determinado.",
      color: "#A855F7",
    },
    {
      title: "🟣 Diagramas de Venn",
      description:
        "Los diagramas de Venn se usan para mostrar cómo se cruzan los conjuntos (por ejemplo, estudiantes y profesores, o las plataformas más usadas). Son una herramienta clave para visualizar intersecciones de datos.",
      color: "#F59E0B",
    },
    {
      title: "💻 Tecnologías Utilizadas",
      description:
        "El proyecto fue desarrollado con React + TypeScript, Tailwind CSS, Chart.js y Framer Motion para las animaciones. Todo dentro de un entorno moderno y eficiente con Vite.",
      color: "#EC4899",
    },
  ];

  const conceptos = [
    {
      title: "🟣 Diagramas de Venn",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Venn0111.svg",
      description:
        "Permiten representar visualmente las relaciones e intersecciones entre conjuntos. En este proyecto se utilizan para comparar grupos como estudiantes, profesores o el uso de plataformas.",
    },
    {
      title: "🌳 Árboles",
      image:
        "https://www.ecured.cu/images/7/73/Arbol_Elementos.gif",
      description:
        "Los árboles muestran estructuras jerárquicas o caminos de decisión. Son útiles para analizar opciones o clasificaciones dentro de los datos de la encuesta.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros 🌱</h1>

      <p className="text-gray-300 text-center max-w-3xl mb-12">
        Somos estudiantes de <strong>8.º semestre de Ingeniería de Sistemas</strong>.  
        Este proyecto corresponde al trabajo final de <strong>Matemáticas Discretas</strong>,  
        donde aplicamos los conceptos de <strong>conjuntos</strong> y <strong>árboles</strong>  
        mediante representaciones gráficas y visualizaciones interactivas.
      </p>

      {/* Tarjetas principales */}
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

      {/* Sección de conceptos */}
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
              className="w-full h-56 object-contain bg-[#0F172A]"
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
        © 2025 Proyecto Matemáticas Discretas – Árboles y Diagramas de Venn
      </footer>
    </div>
  );
}
