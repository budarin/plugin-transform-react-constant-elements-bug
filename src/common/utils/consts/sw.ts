import { FIVE_MINUTES } from './time';

export const ASSETS_CACHE = 'assets';
export const RUNTIME_CACHE_NAME = 'raketa-runtime-web_app';

export const TIME_TO_RELOAD_CSRF_TOKEN = FIVE_MINUTES;

export const SW_CACHE_UPDATE_PROGRESS = 'SW_CACHE_UPDATE_PROGRESS' as const;
export const SW_NEW_VERSION_EXISTS = 'SW_NEW_VERSION_EXISTS' as const;
export const SW_ABORT_REQUEST = 'SW_ABORT_REQUEST' as const;
export const SW_SET_CSRF_TOKEN = 'SW_SET_CSRF_TOKEN' as const;
export const SW_SKIP_WAITING = 'SW_SKIP_WAITING' as const;
export const SW_RELOAD_TABS = 'SW_RELOAD_TABS' as const;
export const SW_QUOTA_EXCEED = 'SW_QUOTA_EXCEED' as const;
export const SW_TRY_TO_SKIP_WAITING = 'SW_TRY_TO_SKIP_WAITING' as const;
export const SW_SEND_LOGS = 'SW_SEND_LOGS' as const;
export const SW_GET_DEADLINE = 'SW_GET_DEADLINE' as const;
export const SW_RETURN_DEADLINE = 'SW_RETURN_DEADLINE' as const;
export const SW_GET_CSRF_TOKEN = 'SW_GET_CSRF_TOKEN' as const;
export const SW_RETURN_CSRF_TOKEN = 'SW_RETURN_CSRF_TOKEN' as const;

export type SwGEetCsrfToken = typeof swGgetCsrfToken;
export const swGgetCsrfToken = {
    type: SW_GET_CSRF_TOKEN,
};

export type SwReturnCsrfToken = ReturnType<typeof swReturnCsrfToken>;
export function swReturnCsrfToken(token?: string): {
    type: 'SW_RETURN_CSRF_TOKEN';
    payload: { token: string | undefined };
} {
    return {
        type: SW_RETURN_CSRF_TOKEN,
        payload: {
            token,
        },
    };
}

export type SwGetDeadlineMessage = typeof swGetDeadlineMessage;
export const swGetDeadlineMessage = {
    type: SW_GET_DEADLINE,
};

export type SwReturnDeadlineMessage = ReturnType<typeof swReturnDeadlineMessage>;
export function swReturnDeadlineMessage(
    deadline: number,
    version: string,
): { type: 'SW_RETURN_DEADLINE'; payload: { deadline: number; version: string } } {
    return {
        type: SW_RETURN_DEADLINE,
        payload: {
            deadline,
            version,
        },
    };
}

export type SwSendLogs = ReturnType<typeof swSendLogsMessage>;
export function swSendLogsMessage(logs: Record<string, unknown>[]): {
    type: 'SW_SEND_LOGS';
    payload: Record<string, unknown>[];
} {
    return {
        type: SW_SEND_LOGS,
        payload: logs,
    };
}

export type SwAbortRequestMessage = ReturnType<typeof swAbortRequestMessage>;
export function swAbortRequestMessage(requestId: string): { type: 'SW_ABORT_REQUEST'; payload: { requestId: string } } {
    return {
        type: SW_ABORT_REQUEST,
        payload: {
            requestId,
        },
    };
}

export type SwSetCSRFTokenMessage = ReturnType<typeof swSetCSRFTokenMessage>;
export function swSetCSRFTokenMessage(token: string): { type: 'SW_SET_CSRF_TOKEN'; payload: { token: string } } {
    return {
        type: SW_SET_CSRF_TOKEN,
        payload: {
            token,
        },
    };
}

export type SwCacheUpdatePprogressMessage = ReturnType<typeof swCacheUpdatePprogressMessage>;
export function swCacheUpdatePprogressMessage(progress: string): {
    type: 'SW_CACHE_UPDATE_PROGRESS';
    payload: { progress: string };
} {
    return {
        type: SW_CACHE_UPDATE_PROGRESS,
        payload: {
            progress,
        },
    };
}

export type SwSkipWaitingMessage = typeof swSkipWaitingMessage;
export const swSkipWaitingMessage = {
    type: SW_SKIP_WAITING,
};

export type SwReloadTabsMessage = ReturnType<typeof swReloadTabsMessage>;
export function swReloadTabsMessage(version: string): { type: 'SW_RELOAD_TABS'; payload: { version: string } } {
    return {
        type: SW_RELOAD_TABS,
        payload: {
            version,
        },
    };
}

export type SwTryToSkipWaitingMessage = typeof swTryToSkipWaitingMessage;
export const swTryToSkipWaitingMessage = {
    type: SW_TRY_TO_SKIP_WAITING,
};

export type SwQuotaExceedMessage = typeof swQuotaExceedMessage;
export const swQuotaExceedMessage = {
    type: SW_QUOTA_EXCEED,
};

export type SwNewVersionExistsMessage = ReturnType<typeof swNewVersionExistsMessage>;
type SwNewVersionExistsMessageProps = { deadline: number; version: string };
export function swNewVersionExistsMessage({ deadline: deadline, version }: SwNewVersionExistsMessageProps): {
    type: 'SW_NEW_VERSION_EXISTS';
    payload: { deadline: number; version: string };
} {
    return {
        type: SW_NEW_VERSION_EXISTS,
        payload: {
            deadline,
            version,
        },
    };
}

export type SwMessageData =
    | SwSendLogs
    | SwAbortRequestMessage
    | SwSetCSRFTokenMessage
    | SwCacheUpdatePprogressMessage
    | SwSkipWaitingMessage
    | SwReloadTabsMessage
    | SwTryToSkipWaitingMessage
    | SwQuotaExceedMessage
    | SwNewVersionExistsMessage
    | SwGetDeadlineMessage
    | SwReturnDeadlineMessage
    | SwGEetCsrfToken
    | SwReturnCsrfToken;
