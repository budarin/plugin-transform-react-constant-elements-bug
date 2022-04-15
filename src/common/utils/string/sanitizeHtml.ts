export function sanitizeHtml(value: string): string {
    return (value || '').replace(/</g, '\\u003c');
}
