import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SummaryField } from "./summary-field";

const totalPointsMock = vi.fn()

vi.mock('@/utils/use-get-points', () => ({
    useGetTotalPoints: () => ({
        getTotalPoints: totalPointsMock
    })
}))

describe('summaryFIeld', () => {
    it('render empty field', () => {
        totalPointsMock.mockReturnValue(null)
        const { container } = render(<SummaryField index={0} />)
        expect(container.innerHTML).toBe('<div class="rounded-md w-8 h-8 m-2 border-solid border-black border content-center justify-items-center bg-stone-200"></div>')
    })
    it('render filled field', () => {
        totalPointsMock.mockReturnValue(5)
        const { getByText } = render(<SummaryField index={0} />)

        expect(getByText(5)).toBeDefined()

    })
})