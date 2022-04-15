// {
//     usage: number;
//     quota: number;
// }

export async function getEstimatedStorageQuota(): Promise<StorageEstimate | undefined> {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
        return navigator.storage.estimate();
    } else {
        return undefined;
    }
}
