import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { GameField } from "./field"

describe('field', () => {
    it('check if render', () => {
        const { getByText } = render(<GameField>child</GameField>)
        expect(getByText(/child/)).toBeDefined()
        expect(getByText(/child/)).toHaveClass('rounded-md w-8 h-8 m-2 border-solid border-black border content-center justify-items-center')
    })
    it('check if render without children', () => {
        const result = render(<GameField />)

        expect(result).toBeDefined()
    })
})