import { technicalRouts } from './consts/routes';
import { objectHasOwnProperty } from './object/objectHasOwnProperty';

export function isTechnicalRoute(url: string): boolean {
    return objectHasOwnProperty(technicalRouts, url as unknown as keyof typeof technicalRouts);
}
