import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useDiceView } from "./use-dice-view";

describe('useDiceView', () => {
    it('open dice view and close', () => {
        const { result } = renderHook(() => useDiceView())
        expect(result.current.diceView).toBe(undefined)
        act(() => result.current.setDiceView({ col: 1, row: 3 }))
        expect(result.current.diceView).toStrictEqual({ col: 1, row: 3 })
        expect(result.current.hasDiceOpen(3, 1)).toBeTruthy()
        act(() => result.current.closeDiceView())
        expect(result.current.diceView).toBe(undefined)

    })
})