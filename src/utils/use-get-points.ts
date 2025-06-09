import { getGroupedValues } from "./get-grouped-values";
import { getTotalSum } from "./get-total-sum";
import { useBoardAtom } from "./use-board-atom";

export const useGetTotalPoints = () => {
    const { boardValues } = useBoardAtom()
    const getTotalPoints = (fieldIndex: number) => {
        const sum = getTotalSum(getGroupedValues(boardValues(), fieldIndex))
        return sum && (fieldIndex === 5 || fieldIndex === 11) ? sum * 2 : sum;
    }
    const getGameSum = () => {
        const fieldindexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        return fieldindexes.every((v) => getTotalPoints(v) !== null) ?
            fieldindexes.reduce((sum, x) => (sum || 0) + getTotalPoints(x)!)
            : undefined
    }
    return { getTotalPoints, getGameSum }
}