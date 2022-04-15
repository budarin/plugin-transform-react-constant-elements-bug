import { useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';

const { log } = console;

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps): JSX.Element {
    useEffect(() => {
        const { message, stack } = error;

        log(message, stack);
    }, [error]);

    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error ? error.message : 'Error!'}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}
