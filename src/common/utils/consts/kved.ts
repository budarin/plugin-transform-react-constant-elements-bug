import { kvedJsonFileName } from 'common/utils/prevals/kvedJsonFileName.preval';

const parts = kvedJsonFileName.split('.');
if (parts.length < 3) {
    throw new Error('Имя файла kved.json не содержит хэш');
}
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const SEARCH_INDEX_HASH = parts[parts.length - 2]!;
export const SEARCH_INDEX_CACHE_NAME = `/kved-search-index-${SEARCH_INDEX_HASH}`;
export const KVED_JSON_CACHE_NAME = `/kved.${SEARCH_INDEX_HASH}.json`;
