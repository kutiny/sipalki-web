import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/home/home";
import { PracticaPositionsView } from "./views/practica-positions/practica-positions";
import { PositionsView } from "./views/positions/positions";
import { HomeView } from "./views/home-view/home-view";

const routes = [
    {
        path: "/",
        element: (
            <Home />
        ),
        children: [
            {
                path: "",
                element: (<HomeView />),
            },
            {
                path: "v/practica-posiciones",
                element: (<PracticaPositionsView />),
                children: [
                    {
                        path: ':seed',
                        element: (<PracticaPositionsView />)
                    },
                ],
            },
            {
                path: "v/posiciones",
                element: (<PositionsView />),
            }
        ],
    }
];

export const router = createBrowserRouter(routes);

