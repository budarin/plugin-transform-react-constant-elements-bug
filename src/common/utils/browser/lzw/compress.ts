export async function compress(str: string): Promise<ArrayBuffer> {
    const byteArray = new TextEncoder().encode(str);
    const cs = new CompressionStream('gzip');
    const writer = cs.writable.getWriter();

    // FIXME: typings
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    writer.write(byteArray);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    writer.close();

    return new Response(cs.readable).arrayBuffer();
}
