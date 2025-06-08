import { sortValues } from "./sort-values"
import { FieldTime } from "./use-board-atom"


export const getGroupedValues = (boardValues: FieldTime[], index: number): number[] => {
    const valueMap = boardValues.map((v) => v.field)
    if (index < 5) {
        // column
        return sortValues(valueMap.filter(({ field }) => field.endsWith(index.toString())).map(({ value: v }) => v))
    } else if (index === 5) {
        // diagonal
        return sortValues(valueMap.filter(({ field }) => field === "4-0" || field === "3-1" || field === "2-2" || field === "1-3" || field === "0-4").map(({ value: v }) => v))
    } else if (index < 11) {
        // row
        return sortValues(valueMap.filter(({ field }) => field.startsWith((index - 6).toString())).map(({ value: v }) => v))
    } else {
        // diagonale
        return sortValues(valueMap.filter(({ field }) => field === "0-0" || field === "1-1" || field === "2-2" || field === "3-3" || field === "4-4").map(({ value: v }) => v))
    }
}