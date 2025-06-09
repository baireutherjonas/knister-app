

export const getCounts = (values: number[]) => {
    const map = new Map<number, number>();

    values.forEach(v => map.has(v) ?
        map.set(v, map.get(v)! + 1)
        :
        map.set(v, 1));

    return Array.from(map.values()).sort((a, b) => a - b);
}