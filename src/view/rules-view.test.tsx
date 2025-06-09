import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { RulesView } from "./rules-view"

describe('RulesView', () => {
    it('render and match snapshot', () => {
        const result = render(<RulesView />)

        expect(result).toMatchSnapshot()
    })
})