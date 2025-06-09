import { describe, expect, it, vi } from "vitest"
import { Dice } from "./dice"
import { render } from "@testing-library/react"
import { faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo } from "@fortawesome/free-solid-svg-icons"

const iconMock = vi.fn()

vi.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: ({ icon }: { icon: any }) => {
        iconMock(icon)
        return <div>Icon</div>
    }
}))

describe('Dice', () => {
    it('should render 1', () => {
        render(<Dice value={1} />)
        expect(iconMock).toHaveBeenCalledWith(faDiceOne)
    })
    it('should render 2', () => {
        render(<Dice value={2} />)
        expect(iconMock).toHaveBeenCalledWith(faDiceTwo)
    })
    it('should render 3', () => {
        render(<Dice value={3} />)
        expect(iconMock).toHaveBeenCalledWith(faDiceThree)
    })
    it('should render 4', () => {
        render(<Dice value={4} />)
        expect(iconMock).toHaveBeenCalledWith(faDiceFour)
    })
    it('should render 5', () => {
        render(<Dice value={5} />)
        expect(iconMock).toHaveBeenCalledWith(faDiceFive)
    })
    it('should render 6', () => {
        render(<Dice value={6} />)
        expect(iconMock).toHaveBeenCalledWith(faDiceSix)
    })
    it('should render wrong number', () => {
        const { container } = render(<Dice value={66} />)
        expect(iconMock).toHaveBeenCalledTimes(0)
        expect(container.innerHTML).toBe("")
    })
})