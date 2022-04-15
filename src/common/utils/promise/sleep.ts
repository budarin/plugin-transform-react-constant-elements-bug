import { genRandomIntInRange } from '../genRandomIntInRange';

export function sleep(min: number, max: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, genRandomIntInRange(min, max)));
}
