import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type GameFieldProps = PropsWithChildren & {
    className?: string
}

export function GameField({ children, className }: GameFieldProps) {
    return <div className={cn(`rounded-md w-8 h-8 m-2 border-solid border-black border content-center justify-items-center`, className)}>
        {children}
    </div>
}