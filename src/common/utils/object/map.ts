type MapPredicate = (value: string, index?: number, array?: string[]) => unknown;

export function objectMap(obj: object, predicate: MapPredicate): unknown[] {
    return Object.keys(obj).map(predicate);
}
