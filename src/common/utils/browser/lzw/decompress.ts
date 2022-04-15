export async function decompress(byteArray: Uint8Array): Promise<string> {
    const cs = new DecompressionStream('gzip');
    const writer = cs.writable.getWriter();

    // FIXME: typings
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    writer.write(byteArray);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    writer.close();

    return new Response(cs.readable).arrayBuffer().then(function (arrayBuffer) {
        return new TextDecoder().decode(arrayBuffer);
    });
}
