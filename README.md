# 📊 Dashboard Analítico – Matemáticas Discretas

Este proyecto es parte del curso de **Matemáticas Discretas**, y tiene como objetivo representar de manera visual y analítica la información obtenida de una encuesta aplicada a estudiantes y profesores.  
El sistema permite explorar los resultados a través de un **dashboard interactivo**, donde se aplican conceptos de **grafos** y **diagramas de Venn** para analizar relaciones y patrones entre los datos recolectados.

---

## 🧩 Descripción General

El proyecto consiste en un **dashboard informativo** que resume los resultados de una encuesta aplicada en el contexto educativo.  
Incluye distintas visualizaciones que permiten observar:

- 👨‍🎓 Distribución de **estudiantes por nivel académico**.  
- 👩‍🏫 Clasificación de **profesores por años de experiencia**.  
- 🔁 **Diagramas de Venn** que muestran la intersección entre roles (estudiantes/profesores) y plataformas digitales utilizadas.  
- 🌳 **Árbol de decisiones** que representa el flujo de preguntas y respuestas de los usuarios encuestados.  

Todo el procesamiento y visualización se realizan desde el **frontend**, empleando librerías de gráficos modernas y animaciones suaves para ofrecer una experiencia visual atractiva y comprensible.

---

## 🧠 Conceptos de Matemáticas Discretas aplicados

Este trabajo integra distintos modelos de representación y análisis propios de la **Matemática Discreta**:

- **Grafos:** empleados para representar relaciones entre conjuntos (roles ↔ plataformas, usuarios ↔ respuestas).  
- **Diagramas de Venn:** utilizados para mostrar la intersección y unión de los conjuntos analizados.  
- **Árboles de decisión:** usados para modelar el proceso de selección de respuestas de cada usuario en la encuesta.

---

## 🌿 Módulo del Árbol de Decisiones

En la pestaña **“Árbol de decisiones”**, el sistema muestra una representación visual del proceso de decisión de los usuarios:

- Cada **nodo** del árbol representa una **pregunta** o una **respuesta**.  
- Las **ramas** conectan las decisiones posibles entre los distintos caminos del cuestionario.  
- Incluye un **selector (dropdown)** que permite **filtrar el árbol por usuario**, mostrando únicamente el recorrido que realizó cada uno en la encuesta.  

Esto permite analizar los patrones de respuesta y las similitudes entre distintos perfiles (por ejemplo, cómo responden los estudiantes frente a los profesores).

---

## 🧭 Estructura principal del proyecto

*(Pendiente por completar con tu árbol de carpetas y archivos principales)*


## 🧰 Tecnologías utilizadas

| Herramienta | Descripción |
|--------------|-------------|
| **React + TypeScript** | Framework principal para construir la interfaz interactiva. |
| **Vite** | Entorno de desarrollo rápido con soporte HMR para un flujo de trabajo ágil. |
| **Tailwind CSS** | Sistema de estilos para crear un diseño moderno, limpio y adaptable. |
| **@tailwindcss/vite** | Integración de Tailwind CSS con Vite para un mejor rendimiento en desarrollo. |
| **Chart.js** | Librería principal para la creación de gráficos interactivos y visualizaciones. |
| **chartjs-chart-venn** | Extensión de Chart.js para generar diagramas de Venn dinámicos. |
| **chartjs-plugin-datalabels** | Plugin que permite mostrar etiquetas y valores dentro de los gráficos. |
| **react-chartjs-2** | Envoltorio (wrapper) de Chart.js para usarlo fácilmente con componentes de React. |
| **Framer Motion** | Librería para transiciones y animaciones suaves en React. |
| **Axios** | Cliente HTTP para la comunicación con la API o carga de datos externos. |
| **React Router DOM** | Sistema de enrutamiento para manejar múltiples vistas o páginas dentro de la aplicación. |
| **React Force Graph 2D** | Librería para representar grafos 2D interactivos (usada en el árbol de decisiones). |
| **React DOM** | Librería para renderizar los componentes React en el DOM. |


## 🚀 Instalación y ejecución
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/dashboard-matematicas-discretas.git
cd dashboard-matematicas-discretas
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar el entorno de desarrollo
```bash
npm run dev
```

La aplicación se abrirá automáticamente en:
👉 http://localhost:5173

## 📚 Conclusión

Este dashboard demuestra cómo los conceptos teóricos de Matemáticas Discretas pueden aplicarse en el análisis de datos reales, facilitando la visualización de relaciones y patrones mediante herramientas tecnológicas modernas.
Su diseño interactivo y modular permite ampliar el análisis con nuevos conjuntos de datos o agregar nuevos modelos matemáticos como árboles, grafos dirigidos o relaciones de equivalencia.

📅 Materia: Matemáticas Discretas
🏫 Institución: Politécnico de la Costa Atlántica (PCA)
📆 Año: 2025