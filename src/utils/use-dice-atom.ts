import { atom, useAtom } from "jotai";

const diceAtom = atom<(number | undefined)[]>([undefined, undefined])

export const useDiceAtom = () => {
    const [diceValue, setDiceValue] = useAtom(diceAtom)
    const getTotalSum = () => diceValue.reduce((sum, x) => (sum || 0) + (x || 0))
    const resetDice = () => setDiceValue([undefined, undefined])
    const getDiceValue = () => diceValue
    return { getDiceValue, setDiceValue, getTotalSum, resetDice }
}