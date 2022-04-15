import { swAbortRequestMessage } from './consts/sw';

export function postSwToAbortRequest(id: string): void {
    navigator.serviceWorker?.controller?.postMessage(swAbortRequestMessage(id));
}
