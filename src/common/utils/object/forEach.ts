type ForEchPredicate = (value: string, index: number, array?: string[]) => void;

export function objectForEach(obj: object, predicate: ForEchPredicate): void {
    return Object.keys(obj).forEach(predicate);
}
