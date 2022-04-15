declare module 'koa2-streaming-react-render' {
    export default function renderStream(ctx: any, head: any, stream: any, tail: any, options?: {}): Promise<void>;
}
