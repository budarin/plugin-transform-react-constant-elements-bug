import { X_CSRF_TOKEN } from 'common/utils/consts/request';
import { getMetaTokenFromDom } from './getMetaTokenFromDom';

let token = '';

export function getCsrfTokenFomDom(): string {
    if (!token) {
        token = getMetaTokenFromDom(X_CSRF_TOKEN);
    }

    return token;
}
