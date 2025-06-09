import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sidesheet } from "./sidesheet";
import userEvent from "@testing-library/user-event";
import { TestWrapper } from "@/test/test-wrapper";

describe('sidesheet', () => {
    it('render sidsheet', async () => {
        const user = userEvent.setup()
        const { getByText, getByTestId } = render(<Sidesheet />, { wrapper: TestWrapper })
        expect(getByText(/Punkte/)).toBeDefined()
        await user.click(getByTestId('toggle-button'))

    })
})