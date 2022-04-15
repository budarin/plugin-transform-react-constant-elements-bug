import { objectHasOwnProperty } from 'common/utils/object/objectHasOwnProperty';

const tokens = {} as Record<string, string>;

export function getMetaTokenFromDom(tokenId: string): string {
    const element = document.querySelector(`meta[name="${tokenId}"]`);
    const token = objectHasOwnProperty(tokens, tokenId) ? tokens[tokenId] : undefined;

    if (token) {
        return token;
    } else {
        if (element) {
            tokens[tokenId] = element.getAttribute('content') || '';
            element.parentElement?.removeChild(element);
        }
        return tokens[tokenId] || '';
    }
}
