import { describe, expect, it } from "vitest";
import { getCounts } from "./get-counts";

describe('get-counts', () => {
    it('empty array', () => {
        const result = getCounts([]);
        expect(result).toEqual([])
    })

    it('only unique entries', () => {
        const result = getCounts([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(result).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1])
    })

    it('matching entries', () => {
        const result = getCounts([1, 2, 3, 1, 2, 1])
        expect(result).toEqual([1, 2, 3])
    })

    it('matching entries test two', () => {
        const result = getCounts([7, 8, 9, 9, 8, 8])
        expect(result).toEqual([1, 2, 3])
    })
})