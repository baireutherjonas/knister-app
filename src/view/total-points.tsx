import { Button } from "@/components/ui/button"
import { useBoardAtom } from "@/utils/board-atom"
import { PropsWithChildren } from "react"

function TotalPointsRenderer({ children }: PropsWithChildren) {
    return <div className="text-3xl">{children}</div>
}

export function TotalPoints() {

    const { summaryValues, resetBoard } = useBoardAtom()

    const fieldindexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    if (fieldindexes.every((v) => summaryValues(v) !== null)) {
        return <div>
            <TotalPointsRenderer>Punkte {fieldindexes.reduce((sum, x) => (sum || 0) + (summaryValues(x) || 0))}</TotalPointsRenderer>
            <Button variant={'secondary'} onClick={resetBoard}>Neustart</Button>
        </div>
    }


    return <TotalPointsRenderer>Punkte ...</TotalPointsRenderer>;
}