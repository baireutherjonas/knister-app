import { Dice } from "@/components/dice"
import { Button } from "@/components/ui/button"
import { useBoardAtom } from "@/utils/use-board-atom"
import { useDiceAtom } from "@/utils/use-dice-atom"
import { useDiceView } from "@/utils/use-dice-view"
import { DiceView } from "@/view/dice-view"




export function DiceSidepanel() {
    const { setDiceValue, getTotalSum, resetDice, getDiceValue } = useDiceAtom()
    const { undoAction, canUndo } = useBoardAtom()
    const { diceView } = useDiceView()
    const diceValue = getDiceValue()

    const handleUndo = () => {
        if (diceValue.every(v => v === undefined)) {
            undoAction()
        } else {
            resetDice()
        }
    }

    const dice = () => {
        setDiceValue([Math.round(Math.random() * 5) + 1, Math.round(Math.random() * 5) + 1])
    }

    return diceView ? <DiceView /> : <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-row gap-4">
            {diceValue[0] && <Dice value={diceValue[0]} />}
            {diceValue[1] && <Dice value={diceValue[1]} />}
        </div>
        <div className="font-bold">{getTotalSum() ? getTotalSum() : 'Bitte würfeln'}</div>
        <Button variant="outline" onClick={dice}>Würfeln</Button>
        {canUndo() && <Button variant="outline" onClick={handleUndo}>Rückgängig</Button>}
    </div>
}