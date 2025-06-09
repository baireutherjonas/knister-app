import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TotalPoints } from "./total-points";
import userEvent from "@testing-library/user-event";

const getGameSumMock = vi.fn()
const resetBoardMock = vi.fn()
vi.mock('@/utils/use-board-atom', () => ({
    useBoardAtom: () => ({ resetBoard: resetBoardMock })
}))
vi.mock('@/utils/use-get-points', () => ({
    useGetTotalPoints: () => ({ getGameSum: getGameSumMock })
}))

describe('TotalPoints', () => {
    it('show no points', () => {
        getGameSumMock.mockImplementation(() => undefined)
        const { getByText } = render(<TotalPoints />)
        expect(getByText(/Punkte .../)).toBeDefined()
    })

    it('show points and click restart', async () => {

        const user = userEvent.setup()
        getGameSumMock.mockImplementation(() => 8)
        const { getByText, getByRole } = render(<TotalPoints />)
        expect(getByText(/Punkte 8/)).toBeDefined()
        await user.click(getByRole('button'))
        expect(resetBoardMock).toHaveBeenCalledTimes(1)
    })
})