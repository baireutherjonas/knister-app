import {
    useBoardAtom
} from "@/utils/board-atom";
import { Button } from "./ui/button";
import { useDiceAtom } from "@/utils/dice-atom";
import { useNavigate } from "react-router";

type ClickFieldProps = {
    row: number;
    col: number;
}

const getIsDiaognal = (row: number, col: number) => {
    return row === col || row + col === 4 ? true : false;
}

export function ClickField({ row, col }: ClickFieldProps) {
    const isDiagonalField = getIsDiaognal(row, col)
    const { setBoardValue, useGetBoardValue } = useBoardAtom()
    const { getTotalSum } = useDiceAtom()
    const navigate = useNavigate()
    const getBoardValue = useGetBoardValue(row, col)

    const handleSelectValue = (value: number) => {
        setBoardValue(row, col, value)
    }

    const handleSetValue = () => {
        if (getBoardValue) return

        const totalSum = getTotalSum()
        if (totalSum) {
            handleSelectValue(totalSum)
        } else {
            navigate(`dice?col=${col}&row=${row}`)
        }
    }

    return <Button variant={'ghost'} asChild onClick={handleSetValue}>
        <div className={`rounded-md w-10 h-10 m-2 border-solid border-black border content-center justify-items-center ${isDiagonalField && 'bg-blue-100'}`}>
            {getBoardValue}
        </div>
    </Button>

}
