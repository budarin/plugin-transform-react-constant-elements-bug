function uint8ArrayToHexString(byteArray: Uint8Array) {
    return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xff).toString(16)).slice(-2);
    }).join('');
}

export function ulid() {
    let rnd!: Uint8Array;

    if (__CLIENT__) {
        rnd = new Uint8Array(10);
        self.crypto.getRandomValues(rnd);
    }

    if (__SERVER__) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
        const nodeCrypto = require('crypto');
        // eslint-disable-next-line
        rnd = new Uint8Array(nodeCrypto.randomBytes(10));
    }

    const ulidStr = Date.now().toString(16).padStart(12, '0') + uint8ArrayToHexString(rnd);

    return `${ulidStr.substring(0, 8)}-${ulidStr.substring(8, 12)}-${ulidStr.substring(12, 16)}-${ulidStr.substring(
        16,
        20,
    )}-${ulidStr.substring(20)}`;
}
