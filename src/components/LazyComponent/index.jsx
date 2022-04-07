import { lazy, Suspense } from 'react';

export function lazyComponent({ asyncLoader, syncLoader, id }, fallback) {
    const LazyComponent = (props) => {
        let Component;

        // Server
        if (syncLoader) {
            const componentModule = syncLoader();
            Component = componentModule.default;
        } else {
            // Client

            // Have preloaded module and make component sync
            // eslint-disable-next-line security/detect-object-injection
            const cachedModule = require.cache[id];

            if (cachedModule) {
                // Have preloaded module and make component sync
                Component = cachedModule.exports.default;
            } else {
                Component = lazy(asyncLoader);

                return (
                    <Suspense fallback={fallback}>
                        <Component {...props} />
                    </Suspense>
                );
            }
        }

        if (!Component) {
            throw new Error('lazyComponent: Cannot load component');
        }

        return <Component {...props} />;
    };

    LazyComponent.loader = asyncLoader;

    return LazyComponent;
}

export function lazyComponentBabel(loader, fallback) {
    if (typeof loader === 'function') {
        throw new Error('Add lazyComponentBabelPlugin to your babel config');
    }

    return lazyComponent(loader, fallback);
}
