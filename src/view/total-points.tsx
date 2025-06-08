import { Button } from "@/components/ui/button"
import { useBoardAtom } from "@/utils/use-board-atom"
import { useGetTotalPoints } from "@/utils/use-get-points"
import { PropsWithChildren } from "react"

function TotalPointsRenderer({ children }: PropsWithChildren) {
    return <div className="text-3xl">{children}</div>
}

export function TotalPoints() {

    const { resetBoard } = useBoardAtom()

    const { getGameSum } = useGetTotalPoints()



    if (getGameSum()) {
        return <div>
            <TotalPointsRenderer>Punkte {getGameSum()}</TotalPointsRenderer>
            <Button variant={'secondary'} onClick={resetBoard}>Neustart</Button>
        </div>
    }


    return <TotalPointsRenderer>Punkte ...</TotalPointsRenderer>;
}