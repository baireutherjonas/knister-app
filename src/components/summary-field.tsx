import { useBoardAtom } from "@/utils/use-board-atom";
import { GameField } from "./field";

type SummaryFieldProps = {
    index: number
}

export function SummaryField({ index }: SummaryFieldProps) {
    const { summaryValues } = useBoardAtom()
    return <GameField className={`bg-stone-200`}>{summaryValues(index)}</GameField>
}