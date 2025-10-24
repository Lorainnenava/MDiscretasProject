import { Link, Outlet, useLocation } from "react-router-dom";

export default function NavBarComponent() {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case "/":
                return "Dashboard";
            case "/decision-tree":
                return "Árbol de decisiones";
            case "/about-us":
                return "Sobre nosotros";
            default:
                return "";
        }
    };

    const options = [
        { title: "Dashboard", name: "Inicio", route: "/" },
        { title: "Árbol de decisiones", name: "Árbol de decisiones", route: "/decision-tree" },
        { title: "Sobre nosotros", name: "Sobre nosotros", route: "/about-us" },
    ];

    return (
        <>
            <nav className="bg-gray-800 shadow-md fixed w-full top-0 left-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    
                    {/* Título */}
                    <div className="text-white text-2xl font-bold tracking-wide text-center sm:text-left mb-3 sm:mb-0">
                        {getTitle()}
                    </div>

                    {/* Opciones de navegación */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-8 text-left">
                        {options.map((x) => (
                            <Link
                                key={x.route}
                                to={x.route}
                                className={`relative font-medium transition-all duration-300 ${
                                    location.pathname === x.route
                                        ? "text-blue-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                                        : "text-gray-300 hover:text-blue-400"
                                }`}
                            >
                                {x.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Contenido principal */}
            <main className="pt-24 px-6 w-full">
                <Outlet />
            </main>
        </>
    );
}
