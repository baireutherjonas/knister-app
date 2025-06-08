import { RouteObject } from "react-router";
import App from "./App";
import { WelcomePage } from "./pages/welcome-page";

export const routes: RouteObject[] = [
    {
        index: true,
        element: <WelcomePage />
    },
    {
        path: 'game',
        element: <App />
    }
]