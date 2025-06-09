import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { WelcomePage } from "./welcome-page";
import { TestWrapper } from "@/test/test-wrapper";
import userEvent from '@testing-library/user-event'

const navigateMock = vi.fn()
const boardValuesMock = vi.fn()
const resetBoardMock = vi.fn()


vi.mock('@/utils/use-board-atom', () => ({
    useBoardAtom: () => ({
        boardValues: () => boardValuesMock(),
        resetBoard: resetBoardMock
    })
}))

vi.mock('react-router', async (importOriginal) => {
    return {
        ...await importOriginal<typeof import('react-router')>(),
        useNavigate: () => navigateMock()
    }
})

describe('welcome page', () => {
    it('render title', () => {
        const { getByText } = render(<WelcomePage />, { wrapper: TestWrapper })
        expect(getByText(/Herzlich willkommen zum digitalen Knister Block/i)).toBeDefined()
    })

    it('render disabled continue button', () => {
        boardValuesMock.mockReturnValueOnce([])
        const { getByText } = render(<WelcomePage />, { wrapper: TestWrapper })
        expect(getByText("Spiel fortsetzen")).toHaveAttribute('disabled', '')
        expect(getByText("Spiel neu starten")).not.toHaveAttribute('disabled', '')
    })

    it('click continue', async () => {
        const { getByText } = render(<WelcomePage />, { wrapper: TestWrapper })

        await userEvent.click(getByText("Spiel fortsetzen"))
        expect(navigateMock).toHaveBeenCalledTimes(1)
    })

    it('click restart', async () => {
        const user = userEvent.setup()
        const { getByRole } = render(<WelcomePage />, { wrapper: TestWrapper })
        await user.click(getByRole('button', { name: /Spiel neu starten/i }))
        expect(resetBoardMock).toHaveBeenCalledTimes(1);
        expect(navigateMock).toHaveBeenCalledTimes(1)
    })
})