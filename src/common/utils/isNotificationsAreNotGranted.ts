export function isNotificationsAreNotGranted(): boolean {
    return __CLIENT__ ? 'Notification' in window && Notification.permission !== 'granted' : false;
}
