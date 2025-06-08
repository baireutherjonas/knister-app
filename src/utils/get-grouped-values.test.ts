import { describe, expect, it } from "vitest";
import { FieldTime } from "./use-board-atom";
import { getGroupedValues } from "./get-grouped-values";

const fullField: FieldTime[] = [
    {
        time: 'nothing',
        field: {
            field: '0-0',
            value: 1
        }
    },
    {
        time: 'nothing',
        field: {
            field: '0-1',
            value: 2
        }
    },
    {
        time: 'nothing',
        field: {
            field: '0-2',
            value: 3
        }
    },
    {
        time: 'nothing',
        field: {
            field: '0-3',
            value: 4
        }
    },
    {
        time: 'nothing',
        field: {
            field: '0-4',
            value: 11
        }
    },

    {
        time: 'nothing',
        field: {
            field: '1-0',
            value: 1
        }
    },
    {
        time: 'nothing',
        field: {
            field: '1-1',
            value: 2
        }
    },
    {
        time: 'nothing',
        field: {
            field: '1-2',
            value: 3
        }
    },
    {
        time: 'nothing',
        field: {
            field: '1-3',
            value: 4
        }
    },
    {
        time: 'nothing',
        field: {
            field: '1-4',
            value: 5
        }
    },

    {
        time: 'nothing',
        field: {
            field: '2-0',
            value: 1
        }
    },
    {
        time: 'nothing',
        field: {
            field: '2-1',
            value: 2
        }
    },
    {
        time: 'nothing',
        field: {
            field: '2-2',
            value: 3
        }
    },
    {
        time: 'nothing',
        field: {
            field: '2-3',
            value: 4
        }
    },
    {
        time: 'nothing',
        field: {
            field: '2-4',
            value: 5
        }
    },

    {
        time: 'nothing',
        field: {
            field: '3-0',
            value: 1
        }
    },
    {
        time: 'nothing',
        field: {
            field: '3-1',
            value: 2
        }
    },
    {
        time: 'nothing',
        field: {
            field: '3-2',
            value: 3
        }
    },
    {
        time: 'nothing',
        field: {
            field: '3-3',
            value: 4
        }
    },
    {
        time: 'nothing',
        field: {
            field: '3-4',
            value: 5
        }
    },

    {
        time: 'nothing',
        field: {
            field: '4-0',
            value: 1
        }
    },
    {
        time: 'nothing',
        field: {
            field: '4-1',
            value: 2
        }
    },
    {
        time: 'nothing',
        field: {
            field: '4-2',
            value: 3
        }
    },
    {
        time: 'nothing',
        field: {
            field: '4-3',
            value: 4
        }
    },
    {
        time: 'nothing',
        field: {
            field: '4-4',
            value: 5
        }
    }
]

describe('getGroupedValues', () => {
    it('get horizontal values for row 1', () => {
        const result = getGroupedValues(fullField, 6)
        expect(result).toEqual([1, 2, 3, 4, 11])
    })
    it('get horizontal values for row 2', () => {
        const result = getGroupedValues(fullField, 7)
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
    it('get horizontal values for row 3', () => {
        const result = getGroupedValues(fullField, 8)
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
    it('get horizontal values for row 4', () => {
        const result = getGroupedValues(fullField, 9)
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
    it('get horizontal values for row 5', () => {
        const result = getGroupedValues(fullField, 10)
        expect(result).toEqual([1, 2, 3, 4, 5])
    })

    it('get vertical values for col 1', () => {
        const result = getGroupedValues(fullField, 0)
        expect(result).toEqual([1, 1, 1, 1, 1])
    })

    it('get vertical values for col 2', () => {
        const result = getGroupedValues(fullField, 1)
        expect(result).toEqual([2, 2, 2, 2, 2])
    })

    it('get vertical values for col 3', () => {
        const result = getGroupedValues(fullField, 2)
        expect(result).toEqual([3, 3, 3, 3, 3])
    })

    it('get vertical values for col 4', () => {
        const result = getGroupedValues(fullField, 3)
        expect(result).toEqual([4, 4, 4, 4, 4])
    })

    it('get vertical values for col 5', () => {
        const result = getGroupedValues(fullField, 4)
        expect(result).toEqual([5, 5, 5, 5, 11])
    })


    it('get diagonal from left to right bottom', () => {
        const result = getGroupedValues(fullField, 11)
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
    it('get diagonal from left to right top', () => {
        const result = getGroupedValues(fullField, 5)
        expect(result).toEqual([1, 2, 3, 4, 11])
    })

})