import { METRICS_ROUTE } from 'common/utils/consts/routes';
import { ASSETS_PUBLIC_PATH } from './prevals/assetsPublicPath';

const swPath = `${ASSETS_PUBLIC_PATH}sw.js`;

export function notCachableResource(path: string): boolean {
    return (
        path === swPath ||
        path.startsWith(METRICS_ROUTE) ||
        Boolean(
            [
                'manifest.webmanifest',
                'favicon.ico',
                'favicon.svg',
                // 'android-chrome-144x144.png',
                // 'android-chrome-192x192.png',
                // 'android-chrome-512x512.png',
            ].find((key) => path.endsWith(key)),
        )
    );
}
