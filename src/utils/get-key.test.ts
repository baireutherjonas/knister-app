import { describe, expect, it } from "vitest";
import { getKey } from "./get-key";

describe('getKey', () => {
    it('return correct key', () => {
        const result = getKey(3, 5);
        expect(result).toEqual('3-5')
    })
})