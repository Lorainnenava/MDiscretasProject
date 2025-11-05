import { createBrowserRouter } from "react-router-dom";
import NavBarComponent from "../Components/NavBarComponent";
import DashboardPage from "../Pages/DashboardPage";
import DecisionTreePage from "../Pages/DecisionTreePage";
import AboutUsPage from "../Pages/AboutUsPage";
import DecisionTreeSurveyPage from "../Pages/DecisionTreeSurveyPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBarComponent />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "decision-tree",
                element: <DecisionTreePage />,
            },
         {
                path: "decision-tree-survey",
                element: <DecisionTreeSurveyPage />,
            },
            {
                path: "about-us",
                element: <AboutUsPage />,
            },
        ],
    },
]);
