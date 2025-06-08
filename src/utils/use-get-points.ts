import { getGroupedValues } from "./get-grouped-values";
import { getTotalSum } from "./get-total-sum";
import { useBoardAtom } from "./use-board-atom";

export const useGetTotalPoints = (fieldIndex: number) => {
    const { boardValues } = useBoardAtom()
    const sum = getTotalSum(getGroupedValues(boardValues, fieldIndex))
    return sum && (fieldIndex === 5 || fieldIndex === 11) ? sum * 2 : sum;
}