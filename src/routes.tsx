import { Navigate, RouteObject } from "react-router";
import App from "./App";
import { WelcomePage } from "./pages/welcome-page";

export const routes: RouteObject[] = [
    {
        index: true,
        element: <Navigate to={'knister-app'} />,
    },
    {
        path: 'knister-app',
        element: <WelcomePage />
    },

    {
        path: 'knister-app/game',
        element: <App />
    }
]