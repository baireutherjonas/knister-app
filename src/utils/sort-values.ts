export const sortValues = (values: (number | undefined)[]): number[] => {
    return values.some(v => v === undefined || v === null) ? [] : values.sort((n1, n2) => n1 && n2 ? n1 > n2 ? 1 : -1 : -1) as number[]
}
