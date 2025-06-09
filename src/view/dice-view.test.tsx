import { describe, expect, it, vi } from "vitest";
import { DiceView } from "./dice-view";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setBoardValueMock = vi.fn()
const closeDiceViewMock = vi.fn()

vi.mock('@/utils/use-dice-view', () => ({
    useDiceView: () => ({
        diceView: ({ col: 1, row: 1 }),
        closeDiceView: closeDiceViewMock
    })
}))

vi.mock('@/utils/use-board-atom', () => ({
    useBoardAtom: () => ({
        setBoardValue: setBoardValueMock
    })
}))

describe('dice-view', () => {
    it('render dice view and click one dice', async () => {
        const user = userEvent.setup()
        const { getByText } = render(<DiceView />)
        await user.click(getByText(/5/))
        expect(setBoardValueMock).toHaveBeenCalledWith(1, 1, 5)
        expect(closeDiceViewMock).toHaveBeenCalledTimes(1)
    })

    it('render dice view and abort', async () => {
        const user = userEvent.setup()
        const { getByText } = render(<DiceView />)
        await user.click(getByText(/Abbrechen/))
        expect(setBoardValueMock).toHaveBeenCalledTimes(0)
        expect(closeDiceViewMock).toHaveBeenCalledTimes(1)

    })
})