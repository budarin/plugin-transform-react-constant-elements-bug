interface HasHeaders {
    get: (field: string) => string | null;
}

export function getContentType(headers: HasHeaders): string | undefined {
    return headers.get('content-type')?.split(';')[0]?.trim();
}
