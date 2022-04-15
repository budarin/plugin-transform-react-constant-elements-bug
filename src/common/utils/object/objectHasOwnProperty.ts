export function objectHasOwnProperty(obj: object, key: string | number): boolean {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
