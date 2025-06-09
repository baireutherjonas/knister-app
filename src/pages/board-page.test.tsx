import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BoardPage } from "./board-page";

vi.mock('@/components/click-field', () => ({ ClickField: () => <div>ClickField</div> }))
vi.mock('@/components/summary-field', () => ({ SummaryField: () => <div>SummaryField</div> }))

describe('board-page', () => {
    it('render all fields and summary fields', () => {
        const { getAllByText } = render(<BoardPage />)
        expect(getAllByText('ClickField').length).toBe(25)
        expect(getAllByText('SummaryField').length).toBe(12)
    })
})