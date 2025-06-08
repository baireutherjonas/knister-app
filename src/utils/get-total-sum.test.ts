import { describe, expect, it } from "vitest";
import { getTotalSum } from "./get-total-sum";

describe('getTotalSum', () => {
    it('should test pair', () => {
        const result = getTotalSum([1, 1, 2, 3, 4])
        expect(result).toBe(1)
    })
    it('should test three same', () => {
        const result = getTotalSum([1, 1, 1, 3, 4])
        expect(result).toBe(3)

    })
    it('should test four same', () => {
        const result = getTotalSum([1, 1, 2, 1, 1])
        expect(result).toBe(6)

    })
    it('should test five same', () => {
        const result = getTotalSum([1, 1, 1, 1, 1])
        expect(result).toBe(10)

    })
    it('should test two pairs', () => {
        const result = getTotalSum([1, 1, 4, 3, 4])
        expect(result).toBe(3)

    })
    it('should test full house', () => {
        const result = getTotalSum([1, 1, 8, 8, 8])
        expect(result).toBe(8)

    })
    it('should test street with 7', () => {
        const result = getTotalSum([3, 4, 5, 6, 7])
        expect(result).toBe(8)

    })
    it('should test street without 7', () => {
        const result = getTotalSum([2, 3, 4, 5, 6])
        expect(result).toBe(12)

    })
    it('should return null on not full filled row', () => {
        const result = getTotalSum([2, 3, 4])
        expect(result).toBe(null)

    })
    it('should return 0', () => {
        const result = getTotalSum([2, 3, 4, 9, 8])
        expect(result).toBe(0)

    })
})