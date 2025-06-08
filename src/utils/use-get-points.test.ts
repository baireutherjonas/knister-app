import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useGetTotalPoints } from "./use-get-points";
import { FieldTime } from "./use-board-atom";
import { getGroupedValues } from "./get-grouped-values";

vi.mock('./use-board-atom', () => ({
    useBoardAtom: () => ({
        boardValues: [{ time: 'nothing', field: { field: '0-0', value: 1 } },
        { time: 'nothing', field: { field: '1-0', value: 2 } },
        { time: 'nothing', field: { field: '2-0', value: 3 } },
        { time: 'nothing', field: { field: '3-0', value: 4 } },
        { time: 'nothing', field: { field: '4-0', value: 5 } }
        ]
    })
}))

vi.mock('./get-grouped-values')

describe('useGetTotalPoints', () => {

    it('render Hook', () => {
        vi.mocked(getGroupedValues).mockImplementation((_values: FieldTime[], index: number) => [2, 2, 2, 2, 2])

        const { result } = renderHook(() => useGetTotalPoints())
        expect(result.current.getTotalPoints(0)).toBe(10)
    })

    it('get total Sum', () => {
        vi.mocked(getGroupedValues).mockImplementation((_values: FieldTime[], index: number) => [index, index, index, index, index])
        const { result } = renderHook(() => useGetTotalPoints())
        expect(result.current.getGameSum()).toBe(130)
    })
    it('get total sum, not finished', () => {
        vi.mocked(getGroupedValues).mockImplementation((_values: FieldTime[], _index: number) => [1])

        const { result } = renderHook(() => useGetTotalPoints())
        expect(result.current.getGameSum()).toEqual(undefined)
    })
})