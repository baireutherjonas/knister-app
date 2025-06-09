import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TitleView } from "./title-view";
import { TestWrapper } from "@/test/test-wrapper";
import userEvent from "@testing-library/user-event";
const useNavigateMock = vi.fn()


vi.mock('react-router', async (importOriginal) => {
    return {
        ...await importOriginal<typeof import('react-router')>(),
        useNavigate: () => useNavigateMock
    }
})

describe('TitleView', () => {
    it('render button and handle onClick', async () => {
        const user = userEvent.setup()
        const { getByRole } = render(<TitleView />, { wrapper: TestWrapper })
        await user.click(getByRole('button'))
        expect(useNavigateMock).toHaveBeenCalledTimes(1)
        expect(useNavigateMock).toHaveBeenCalledWith('/')
    })
})