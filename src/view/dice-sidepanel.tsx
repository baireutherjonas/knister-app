import { Button } from "@/components/ui/button"
import { useBoardAtom } from "@/utils/board-atom"
import { useDiceAtom } from "@/utils/dice-atom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo } from '@fortawesome/free-solid-svg-icons'


const Dice = ({ value }: { value: number }) => {
    switch (value) {
        case 1:
            return <FontAwesomeIcon size="3x" icon={faDiceOne} />
        case 2:
            return <FontAwesomeIcon size="3x" icon={faDiceTwo} />
        case 3:
            return <FontAwesomeIcon size="3x" icon={faDiceThree} />
        case 4:
            return <FontAwesomeIcon size="3x" icon={faDiceFour} />
        case 5:
            return <FontAwesomeIcon size="3x" icon={faDiceFive} />
        case 6:
            return <FontAwesomeIcon size="3x" icon={faDiceSix} />
        default:
            return null;
    }
}

export function DiceSidepanel() {
    const { setDiceValue, getTotalSum, diceValue } = useDiceAtom()
    const { undoAction, canUndo } = useBoardAtom()

    const dice = () => {
        setDiceValue([Math.round(Math.random() * 5) + 1, Math.round(Math.random() * 5) + 1])
    }

    return <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-row gap-4">
            {diceValue[0] && <Dice value={diceValue[0]} />}
            {diceValue[1] && <Dice value={diceValue[1]} />}
        </div>
        <div className="font-bold">{getTotalSum() ? getTotalSum() : 'Bitte würfeln'}</div>
        <Button variant="outline" onClick={dice}>Würfeln</Button>
        {canUndo() && <Button variant="outline" onClick={undoAction}>Rückgängig</Button>}
    </div>
}