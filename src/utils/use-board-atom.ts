import { useAtom } from "jotai";
import { useDiceAtom } from "./use-dice-atom";
import { atomWithStorage } from 'jotai/utils';
import { getKey } from "./get-key";

type FieldValue = {
    field: string;
    value: number
}

export type FieldTime = {
    time: string;
    field: FieldValue
}

export const boardAtom = atomWithStorage<FieldTime[]>('board', []);

export const useBoardAtom = () => {
    const [boardValues, setBoardValues] = useAtom(boardAtom);

    const { resetDice } = useDiceAtom()

    const setBoardValue = (row: number, col: number, value: number) => {
        boardValues.push({ time: new Date().toISOString(), field: { field: getKey(row, col), value } })
        setBoardValues(boardValues)
        resetDice()
    }

    const undoAction = () => {
        const keys = boardValues.map(v => v.time).sort((a, b) => a > b ? -1 : 1)
        setBoardValues(boardValues.filter(v => v.time !== keys[0]))
    }
    const canUndo = () => {
        return Object.keys(boardValues).length > 0
    }

    const resetBoard = () => {
        setBoardValues([])
    }

    const useGetBoardValue = (row: number, col: number) => {
        const values = boardValues.map(v => v.field).filter(v => v.field === getKey(row, col))
        if (values.length > 0) {
            return values[0].value
        }
        return undefined
    }


    return { boardValues, setBoardValue, undoAction, canUndo, resetBoard, useGetBoardValue }
}