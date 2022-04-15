export const LOG_ROUTE = '/log';
export const UPLOAD_ROUTE = '/upload';
export const CSP_REPORT = '/csp-report';
export const CTL_REPORT = '/ctl-report';
export const METRICS_ROUTE = '/metrics';
export const DOWNLOAD_FILE_URL = '/download';
export const HEALTH_LIVENESS = '/health/liveness';
export const HEALTH_READYNESS = '/health/readiness';
export const QUOTA_EXCEEDDED_URL = '/quota-exceeded';
export const RESET_ALL_SETTINGS_URL = '/reset-all-settings';
export const REQUEST_CSRF_TOKEN_URL = '/request_csrf_token';

export const technicalRouts = {
    [LOG_ROUTE]: true,
    [CSP_REPORT]: true,
    [CTL_REPORT]: true,
    [METRICS_ROUTE]: true,
    [HEALTH_LIVENESS]: true,
    [HEALTH_READYNESS]: true,
} as const;
