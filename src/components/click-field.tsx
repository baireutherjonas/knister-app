import {
    useBoardAtom
} from "@/utils/use-board-atom";
import { Button } from "./ui/button";
import { useDiceAtom } from "@/utils/use-dice-atom";
import { useDiceView } from "@/utils/view-mode-atom";

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
    const { setDiceView, hasDiceOpen } = useDiceView()
    const { getTotalSum } = useDiceAtom()
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
            setDiceView({ row, col })
        }
    }

    return <Button size={'sm'} variant={'ghost'} asChild onClick={handleSetValue}>
        <div className={`rounded-md w-8 h-8 m-2 border-solid border-black border content-center justify-items-center ${isDiagonalField && 'bg-blue-100'} ${hasDiceOpen(row, col) && 'bg-green-300'}`}>
            {getBoardValue}
        </div>
    </Button>

}
