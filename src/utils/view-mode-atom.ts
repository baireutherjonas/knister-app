import { atom, useAtom } from "jotai"

type DiceField = {
    row: number;
    col: number
}

const diceViewAtom = atom<DiceField | undefined>()

export const useDiceView = () => {
    const [diceView, setDiceView] = useAtom(diceViewAtom)
    const closeDiceView = () => setDiceView(undefined)
    const hasDiceOpen = (row: number, col: number) => row === diceView?.row && col === diceView.col
    return { diceView, closeDiceView, setDiceView, hasDiceOpen }
}