import { useAtom } from "jotai";
import { useDiceAtom } from "./dice-atom";
import { atomWithStorage } from 'jotai/utils';

type FieldValue = {
    field: string;
    value: number
}

type FieldTime = {
    time: string;
    field: FieldValue
}

export const boardAtom = atomWithStorage<FieldTime[]>('board', []);

export const useBoardAtom = () => {
    const [boardValues, dispatch] = useAtom(boardAtom);



    const { resetDice } = useDiceAtom()
    const setBoardValue = (row: number, col: number, value: number) => {
        boardValues.push({ time: new Date().toISOString(), field: { field: getKey(row, col), value } })
        dispatch(boardValues)
        resetDice()
    }
    const undoAction = () => {
        const keys = boardValues.map(v => v.time).sort((a, b) => a > b ? -1 : 1)
        dispatch(boardValues.filter(v => v.time !== keys[0]))
    }
    const canUndo = () => {
        return Object.keys(boardValues).length > 0
    }

    const sortValues = (values: (number | undefined)[]): number[] => {
        return values.some(v => v === undefined || v === null) ? [] : values.sort((n1, n2) => n1 && n2 ? n1 > n2 ? 1 : -1 : -1) as number[]
    }

    const getCounts = (values: number[]) => {
        const map = new Map<number, number>();

        values.forEach(v => map.has(v) ?
            map.set(v, (map.get(v) || 0) + 1)
            :
            map.set(v, 1));

        return Array.from(map.values());
    }

    const getTotalSum = (values: number[]): number | null => {
        if (values.length !== 5) return null
        // reihe
        if (values.every((value, index) => index < values.length - 1 ? value === values[index + 1] - 1 : true)) {
            // mit 7?
            return values.includes(7) ? 8 : 12
        }
        const counts: number[] = getCounts(values)
        // 5er
        if (counts.includes(5)) {
            return 10
        }
        // 4er
        if (counts.includes(4)) {
            return 6
        }
        // full house
        if (counts.includes(3) && counts.includes(2)) {
            return 8
        }
        // 3er
        if (counts.includes(3)) {
            return 3
        }
        // 2er + 2er
        if (counts.filter(v => v === 2).length === 2) {
            return 3
        }
        // 2er
        if (counts.includes(2)) {
            return 1
        }
        return 0
    }

    const getBoardValues = (index: number): number[] => {
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

    const resetBoard = () => {
        dispatch([])
    }

    const summaryValues = (fieldIndex: number) => {
        const sum = getTotalSum(getBoardValues(fieldIndex))
        return sum && (fieldIndex === 5 || fieldIndex === 11) ? sum * 2 : sum;
    }

    const useGetBoardValue = (row: number, col: number) => {
        const values = boardValues.map(v => v.field).filter(v => v.field === getKey(row, col))
        if (values.length > 0) {
            return values[0].value
        }
        return undefined
    }

    const getKey = (row: number, col: number) => `${row}-${col}`

    return { boardValues, setBoardValue, undoAction, canUndo, summaryValues, resetBoard, useGetBoardValue }
}