import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const PracticaPositionsView = lazy(() => import('./views/practica-positions/practica-positions'));
const PositionsView = lazy(() => import('./views/positions/positions'));
const HomeView = lazy(() => import('./views/home-view/home-view'));
const Home = lazy(() => import('./views/home/home'));
const ConceptsView = lazy(() => import('./views/concepts/concepts'));
const TechniquesView = lazy(() => import('./views/techniques/techniques'));

const routes = [
    {
        path: "/",
        element: (
            <Suspense fallback={<p>Loading...</p>}>
                <Home />
            </Suspense>
        ),
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<p>Loading...</p>}>
                        <HomeView />
                    </Suspense>
                ),
            },
            {
                path: "v/practica-posiciones",
                element: (
                    <Suspense fallback={<p>Loading...</p>}>
                        <PracticaPositionsView />
                    </Suspense>
                ),
                children: [
                    {
                        path: ':seed',
                        element: (
                            <Suspense fallback={<p>Loading...</p>}>
                                <PracticaPositionsView />
                            </Suspense>
                        )
                    },
                ],
            },
            {
                path: "v/posiciones",
                element: (<PositionsView />),
            },
            {
                path: "v/conceptos",
                element: (<ConceptsView />),
            },
            {
                path: "v/tecnicas",
                element: (<TechniquesView />),
            }
        ],
    }
];

const router = createBrowserRouter(routes);

export { router };

