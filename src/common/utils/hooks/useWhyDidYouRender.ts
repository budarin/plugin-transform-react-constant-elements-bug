// https://usehooks.com/useWhyDidYouUpdate/

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { objectForEach } from '../object/forEach';

const logName = '[WDYR] ';

// eslint-disable-next-line max-lines-per-function
export function useWhyDidYouRender(name: string, props?: Record<string, any>): void {
    // Get a mutable ref object where we can store props ...
    // ... for comparison next time this hook runs.
    const previousProps = useRef<Record<string, any>>();
    const cssStyles = 'background-color: red; color: white; border-radius: 2px';

    // eslint-disable-next-line max-lines-per-function
    useEffect(() => {
        if (previousProps.current && props) {
            // Use this object to keep track of changed props
            const changesObj = {} as Record<string, any>;
            // Iterate through keys
            objectForEach({ ...previousProps.current, ...props }, (key) => {
                // If previous is different from current
                if (previousProps.current && previousProps.current[key] !== props[key]) {
                    // Add to changesObj
                    changesObj[key] = {
                        from: previousProps.current[key],
                        to: props[key],
                    };
                }
            });

            // If changesObj not empty then output to console
            if (Object.keys(changesObj).length > 0) {
                console.log(`%c ${logName}`, cssStyles, {
                    name,
                    props: changesObj,
                });
            }
        } else {
            console.log(`%c ${logName}`, cssStyles, {
                name,
                reason: 'parent render or hook change',
            });
        }

        // Finally update previousProps with current props for next hook call
        previousProps.current = props;
    });
}
