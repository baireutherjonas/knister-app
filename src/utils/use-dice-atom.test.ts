import { describe, expect, it } from "vitest";
import { useDiceAtom } from "./use-dice-atom";
import { renderHook, act } from '@testing-library/react'

describe('useDiceAtom', () => {
    it('should update value and return value', () => {
        const { result } = renderHook(() => useDiceAtom());
        expect(result.current.diceValue).toStrictEqual([undefined, undefined])
        act(() => result.current.setDiceValue([1, 2]))
        expect(result.current.diceValue).toStrictEqual([1, 2])
        expect(result.current.getTotalSum()).toBe(3)
        act(() => result.current.resetDice())
        expect(result.current.diceValue).toStrictEqual([undefined, undefined])
        expect(result.current.getTotalSum()).toBe(0)
    })
})