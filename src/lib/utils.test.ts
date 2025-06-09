import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe('utils', () => {
    it('cn', () => {
        const result = cn('test', 'test3', ['div', 'row', 'button'])
        expect(result).toEqual('test test3 div row button')
    })
})