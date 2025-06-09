import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ClickField } from "./click-field";
import userEvent from "@testing-library/user-event";
const setBoardValueMock = vi.fn()
const totalSumMock = vi.fn()
const useGetBoardValueMock = vi.fn()
const setDiceViewMock = vi.fn()
vi.mock('@/utils/use-dice-view', () => ({
    useDiceView: () => ({
        hasDiceOpen: (row: number, col: number) => row === 3 && col === 3 ? true : false,
        setDiceView: setDiceViewMock
    })
}))
vi.mock('@/utils/use-board-atom', () => ({
    useBoardAtom: () => ({
        useGetBoardValue: useGetBoardValueMock,
        setBoardValue: setBoardValueMock
    })
}))
vi.mock('@/utils/use-dice-atom', () => ({
    useDiceAtom: () => ({
        getTotalSum: totalSumMock
    })
}))

describe('ClickField', () => {
    it('render successfully', () => {
        const { container } = render(<ClickField row={1} col={0} />)
        expect(container.children[0]).not.toHaveClass('bg-blue-100')
    })

    it('render diagonal cell', () => {
        const { container } = render(<ClickField row={4} col={0} />)
        expect(container.children[0]).toHaveClass('bg-blue-100')
    })

    it('click and set value from dice', async () => {
        const user = userEvent.setup()
        useGetBoardValueMock.mockImplementation((_row: number, _col: number) => null)
        totalSumMock.mockImplementation(() => 5)
        const { container } = render(<ClickField row={4} col={0} />)
        await user.click(container.children[0])
        expect(setBoardValueMock).toHaveBeenCalledTimes(1)
    })

    it('click and open dice view from dice', async () => {
        const user = userEvent.setup()
        useGetBoardValueMock.mockImplementation((_row: number, _col: number) => null)
        totalSumMock.mockImplementation(() => undefined)
        const { container } = render(<ClickField row={4} col={0} />)
        await user.click(container.children[0])
        expect(setBoardValueMock).toHaveBeenCalledTimes(0)
        expect(setDiceViewMock).toHaveBeenCalledTimes(1)
        expect(setDiceViewMock).toHaveBeenCalledWith(({ row: 4, col: 0 }))
    })

    it('should render border if cell is open for dice', () => {
        const { container } = render(<ClickField row={3} col={3} />)
        expect(container.children[0]).toHaveClass('bg-green-300')
    })

    it('should render disabled button', async () => {
        const user = userEvent.setup()
        useGetBoardValueMock.mockImplementation((_row: number, _col: number) => 10)

        const { container } = render(<ClickField row={1} col={1} />)
        await user.click(container.children[0])
        expect(setBoardValueMock).toHaveBeenCalledTimes(0)
        expect(setDiceViewMock).toHaveBeenCalledTimes(0)
    })
})