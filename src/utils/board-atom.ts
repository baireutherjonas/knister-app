import { useAtom } from "jotai";
import { useDiceAtom } from "./dice-atom";
import { atomWithStorage } from 'jotai/utils';

const boardAtom = atomWithStorage<Record<string, number>>('board', {});

export const useBoardAtom = () => {
    const [boardValues, setHistoryAtom] = useAtom(boardAtom)
    const { resetDice } = useDiceAtom()
    const setBoardValue = (row: number, col: number, value: number) => {
        // boardValues.set(getKey(row, col), value)
        boardValues[getKey(row, col)] = value
        setHistoryAtom(boardValues)
        resetDice()
    }
    const undoAction = () => {
        //setHistoryAtom(UNDO)
    }
    const canUndo = () => {
        //return history.canUndo
        return false;
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
        const valueMap = Object.entries(boardValues)
        if (index < 5) {
            // column
            return sortValues(valueMap.filter(([k, _v]) => k.endsWith(index.toString())).map(([_k, v]) => v))
        } else if (index === 5) {
            // diagonal
            return sortValues(valueMap.filter(([k, _v]) => k === "4-0" || k === "3-1" || k === "2-2" || k === "1-3" || k === "0-4").map(([_k, v]) => v))
        } else if (index < 11) {
            // row
            return sortValues(valueMap.filter(([k, _v]) => k.startsWith((index - 6).toString())).map(([_k, v]) => v))
        } else {
            // diagonale
            return sortValues(valueMap.filter(([k, _v]) => k === "0-0" || k === "1-1" || k === "2-2" || k === "3-3" || k === "4-4").map(([_k, v]) => v))
        }
    }

    const resetBoard = () => {
        setHistoryAtom({})
    }

    const summaryValues = (fieldIndex: number) => {
        const sum = getTotalSum(getBoardValues(fieldIndex))
        return sum && (fieldIndex === 5 || fieldIndex === 11) ? sum * 2 : sum;
    }

    const getBoardValue = (row: number, col: number) => {
        return boardValues[getKey(row, col)] || undefined
    }

    const getKey = (row: number, col: number) => `${row}-${col}`

    return { boardValues, setBoardValue, undoAction, canUndo, summaryValues, resetBoard, getBoardValue }
}