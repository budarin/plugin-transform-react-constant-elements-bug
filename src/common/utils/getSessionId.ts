import { SESSION_ID } from 'common/utils/consts/request';
import { getMetaTokenFromDom } from 'client/utils/getMetaTokenFromDom';

let token = '';

export const getSessionIdFromDom = __CLIENT__
    ? (): string => {
          if (!token) {
              token = getMetaTokenFromDom(SESSION_ID);
          }

          return token;
      }
    : () => '';
