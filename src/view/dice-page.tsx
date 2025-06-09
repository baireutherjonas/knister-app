import { Button } from "@/components/ui/button";
import { useBoardAtom } from "@/utils/use-board-atom";
import { useDiceView } from "@/utils/use-dice-view";

const values: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export function DicePage() {
    const { diceView, closeDiceView } = useDiceView()
    const { setBoardValue } = useBoardAtom()
    const handleClose = () => {
        closeDiceView()
    }

    const handleSelectValue = (value: number) => {
        if (diceView) {
            setBoardValue(diceView?.row, diceView?.col, value);
        }
        handleClose()
    }


    return <div className="flex flex-col gap-4 items-center">
        <div>Was wurde gerade gewürfelt?</div>
        <div className="flex flex-row flex-wrap gap-2">
            {values.map(value => <Button size={'sm'} onClick={() => handleSelectValue(value)}>{value}</Button>)}
        </div>
        <Button onClick={handleClose}>Abbrechen</Button>
    </div>
}
