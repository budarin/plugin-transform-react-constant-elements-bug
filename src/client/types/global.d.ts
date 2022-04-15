declare type RequestIdleCallbackHandle = any;
declare type RequestIdleCallbackOptions = {
    timeout: number;
};
declare type RequestIdleCallbackDeadline = {
    readonly didTimeout: boolean;
    timeRemaining: () => number;
};

export declare global {
    interface Window {
        __APP_STATE__: Partial<IAppState>;

        reloadTimer?: NodeJS.Timeout;
        wakeLockRequest: WakeLockSentinel;
        showSplashTimeoutPromise: Promise<void>;

        __REACT_DEVTOOLS_GLOBAL_HOOK__: Record<string, unknown>;
        'get __REACT_DEVTOOLS_GLOBAL_HOOK__': () => void;

        requestIdleCallback: (
            callback: (deadline: RequestIdleCallbackDeadline) => void,
            opts?: RequestIdleCallbackOptions,
        ) => RequestIdleCallbackHandle;
        cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
    }
    interface Navigator {
        deviceMemory?: number;
    }
}
