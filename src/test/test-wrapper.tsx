import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";

export function TestWrapper({ children }: PropsWithChildren) {
    return <BrowserRouter>
        {children}
    </BrowserRouter>
}