import isUUID from 'validator/lib/isUUID';

export function isUlid(str: string): boolean | '' {
    return str && isUUID(str);
}
