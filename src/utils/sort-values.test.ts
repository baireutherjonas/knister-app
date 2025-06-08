import { describe, expect, it } from "vitest";
import { sortValues } from "./sort-values";


describe('sortValues', () => {
    it('nothing contains empty array', () => {
        const result = sortValues([])
        expect(result).toStrictEqual([])
    })
    it('nothing contains undefined', () => {
        const result = sortValues([undefined, 1, 23, 4, 65, 7])
        expect(result).toStrictEqual([])
    })
    it('nothing contains null', () => {
        const result = sortValues([null, 1, 23, 4, 65, 7])
        expect(result).toStrictEqual([])
    })
    it('sort unique values', () => {
        const result = sortValues([5, 6, 7, 4, 3, 2, 1, 9]);
        expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 9])
    })
    it('sort multiuple values', () => {
        const result = sortValues([1, 5, 6, 7, 9, 4, 3, 2, 1, 5, 9]);
        expect(result).toStrictEqual([1, 1, 2, 3, 4, 5, 5, 6, 7, 9, 9])
    })
})