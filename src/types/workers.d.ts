declare interface WorkerMessage {
    type: string;
    payload: Record<string | number, any>;
}