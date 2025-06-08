import { GameField } from "./field";
import { useGetTotalPoints } from "@/utils/use-get-points";

type SummaryFieldProps = {
    index: number
}

export function SummaryField({ index }: SummaryFieldProps) {
    const { getTotalPoints } = useGetTotalPoints()
    return <GameField className={`bg-stone-200`}>{getTotalPoints(index)}</GameField>
}