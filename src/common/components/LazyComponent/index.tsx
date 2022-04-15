import { ComponentType, lazy, LazyExoticComponent, Suspense } from 'react';

interface LazyModule<Props> {
    default: ComponentType<Props>;
}
export type LazyComponentType<Props> = ComponentType & {
    loader(): Promise<LazyModule<Props>>;
};
export interface LazyProps<Props> {
    id: string | number;
    asyncLoader(): Promise<LazyModule<Props>>;
    syncLoader(): LazyModule<Props>;
}

// eslint-disable-next-line max-lines-per-function
export function lazyComponent<Props>(
    { asyncLoader, syncLoader, id }: LazyProps<Props>,
    fallback: JSX.Element | null,
): LazyComponentType<Props> {
    // eslint-disable-next-line max-lines-per-function, @typescript-eslint/no-explicit-any
    const LazyComponent = (props: any): JSX.Element => {
        let Component: LazyExoticComponent<ComponentType<Props>> | ComponentType<Props> | undefined;

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
                Component = (cachedModule.exports as LazyModule<Props>).default;
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
            // eslint-disable-next-line
            throw new Error('lazyComponent: Cannot load component');
        }

        return <Component {...props} />;
    };

    LazyComponent.loader = asyncLoader;

    return LazyComponent;
}

// заглушка на время напиания кода для того чтобы ts не ругался
export function lazyComponentBabel<Props>(
    loader: (() => Promise<LazyModule<Props>>) | LazyProps<Props>,
    fallback: JSX.Element | null = null,
): LazyComponentType<Props> {
    if (typeof loader === 'function') {
        // eslint-disable-next-line
        throw new Error('Add lazyComponentBabelPlugin to your babel config');
    }

    return lazyComponent(loader, fallback);
}
