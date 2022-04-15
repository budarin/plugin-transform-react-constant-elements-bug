// https://gist.github.com/RReverser/03d14b21f3e88b7ea2782b257dae9a09

/**
 * for (const type of ['image/png', 'image/jpeg', 'image/webp', 'image/avif']) {
 *   supportsImgType(type).then((supported) => console.log(`${type}: ${supported}`));
 * }
 *
 * image/png: true
 * image/jpeg: true
 * image/webp: true
 * image/avif: false
 */

export async function supportsImgType(type: string): Promise<boolean> {
    // Create
    //
    // <picture>
    //   <source srcset="data:,x" type="{type}" />
    //   <img />
    // </picture>
    //
    // (where "data:,x" is just a minimal URL that is valid but doesn't trigger network)
    const img = document.createElement('img');
    document.createElement('picture').append(
        // eslint-disable-next-line fp/no-mutating-assign
        Object.assign(document.createElement('source'), {
            srcset: 'data:,x',
            type,
        }),
        img,
    );
    // Wait a single microtick just for the `img.currentSrc` to get populated.
    // eslint-disable-next-line @typescript-eslint/await-thenable
    await 0;
    // At this point `img.currentSrc` will contain "data:,x" if format is supported and "" otherwise.
    return !!img.currentSrc;
}
