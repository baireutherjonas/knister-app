import { RouteObject } from "react-router";
import App from "./App";
import { DicePage } from "./pages/dice-page";
import { WelcomePage } from "./pages/welcome-page";
import { SettingsPage } from "./pages/settings-page";

export const routes: RouteObject[] = [
    {
        index: true,
        element: <WelcomePage />
    },
    {
        path: 'game',
        element: <App />
    },
    {
        path: 'game/dice',
        element: <DicePage />
    },
    {
        path: 'settings',
        element: <SettingsPage />
    }
]