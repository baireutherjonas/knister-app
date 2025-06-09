import { describe, expect, it, vi } from "vitest";
import { DiceSidepanel } from "./dice-sidepanel";
import { render } from "@testing-library/react";
import { useDiceView } from "@/utils/use-dice-view";
import userEvent from "@testing-library/user-event";

const getTotalSumMock = vi.fn()
const diceValueMock = vi.fn()
const setDiceValueMock = vi.fn()
const canUndoMock = vi.fn()
const undoActionMock = vi.fn()
const resetDiceMock = vi.fn()
vi.mock('@/view/dice-view', () => ({ DiceView: () => <div>DicePage</div> }))

vi.mock('@/utils/use-dice-view')

vi.mock('@/utils/use-dice-atom', () => ({
    useDiceAtom: () => ({
        setDiceValue: setDiceValueMock,
        getTotalSum: getTotalSumMock,
        getDiceValue: diceValueMock,
        resetDice: resetDiceMock
    })
}))
vi.mock('@/utils/use-board-atom', () => ({
    useBoardAtom: () => ({
        canUndo: canUndoMock,
        undoAction: undoActionMock
    })
}))

describe('dice side panel', () => {
    it('render dicePage', () => {
        vi.mocked(useDiceView).mockReturnValue(({
            diceView: ({ row: 1, col: 1 }),
            closeDiceView: vi.fn(),
            setDiceView: vi.fn(),
            hasDiceOpen: vi.fn()
        }))
        const { getByText } = render(<DiceSidepanel />)
        expect(getByText(/DicePage/)).toBeDefined()
    })

    it('render dice button', async () => {
        diceValueMock.mockImplementation(() => [undefined, undefined])
        getTotalSumMock.mockImplementation(() => undefined)
        const user = userEvent.setup()
        vi.mocked(useDiceView).mockReturnValue(({
            diceView: undefined,
            closeDiceView: vi.fn(),
            setDiceView: vi.fn(),
            hasDiceOpen: vi.fn()
        }))
        const { getByText, getByRole } = render(<DiceSidepanel />)
        expect(getByText(/Bitte würfeln/)).toBeDefined()
        await user.click(getByRole('button', { name: /Würfeln/ }))
        expect(setDiceValueMock).toHaveBeenCalledTimes(1)
    })

    it('should render dice images', async () => {
        vi.mocked(useDiceView).mockReturnValue(({
            diceView: undefined,
            closeDiceView: vi.fn(),
            setDiceView: vi.fn(),
            hasDiceOpen: vi.fn()
        }))
        getTotalSumMock.mockImplementation(() => 11)
        canUndoMock.mockImplementation(() => true)
        diceValueMock.mockImplementation(() => [1, 1])
        const user = userEvent.setup()
        const { getByRole } = render(<DiceSidepanel />)
        await user.click(getByRole('button', { name: /Rückgängig/ }))
    })

    it('should revert last value', async () => {
        vi.mocked(useDiceView).mockReturnValue(({
            diceView: undefined,
            closeDiceView: vi.fn(),
            setDiceView: vi.fn(),
            hasDiceOpen: vi.fn()
        }))
        getTotalSumMock.mockImplementation(() => 11)
        canUndoMock.mockImplementation(() => true)
        diceValueMock.mockImplementation(() => [undefined, undefined])
        const user = userEvent.setup()
        const { getByRole } = render(<DiceSidepanel />)
        await user.click(getByRole('button', { name: /Rückgängig/ }))
        expect(undoActionMock).toHaveBeenCalledTimes(1)
    })
})