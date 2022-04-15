type FilterPredicate = (
    value: [string, unknown],
    index?: number,
    array?: [string, unknown][],
) => value is [string, unknown];

export function objectFilter(obj: object, predicate: FilterPredicate): { [k: string]: unknown } {
    return Object.fromEntries(Object.entries(obj).filter(predicate));
}
