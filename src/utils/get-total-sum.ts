import { getCounts } from "./get-counts"

export const getTotalSum = (values: number[]): number | null => {
    if (values.length !== 5) return null
    // reihe
    if (values.every((value, index) => index < values.length - 1 ? value === values[index + 1] - 1 : true)) {
        // mit 7?
        return values.includes(7) ? 8 : 12
    }
    const counts: number[] = getCounts(values)
    // 5er
    if (counts.includes(5)) {
        return 10
    }
    // 4er
    if (counts.includes(4)) {
        return 6
    }
    // full house
    if (counts.includes(3) && counts.includes(2)) {
        return 8
    }
    // 3er
    if (counts.includes(3)) {
        return 3
    }
    // 2er + 2er
    if (counts.filter(v => v === 2).length === 2) {
        return 3
    }
    // 2er
    if (counts.includes(2)) {
        return 1
    }
    return 0
}