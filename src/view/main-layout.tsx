import { PropsWithChildren, ReactNode } from "react";
import { TitleView } from "./title-view";

type MainLayoutProps = PropsWithChildren & {
    leftContent?: ReactNode
}

export function MainLayout({ children, leftContent }: MainLayoutProps) {

    return <div className='flex flex-row w-full'>
        <div className='flex flex-col gap-2'>
            <TitleView />
            {leftContent}
        </div>
        <div className="flex flex-row w-full justify-between">
            {children}
        </div>
    </div>
}