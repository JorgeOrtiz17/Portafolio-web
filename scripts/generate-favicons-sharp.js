const sharp = require('sharp');
let pngToIco;
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const src = path.resolve(__dirname, '..', 'artifacts', 'portfolio', 'src', 'assets', 'logo_PW.png');
    const outDir = path.resolve(__dirname, '..', 'artifacts', 'portfolio', 'public', 'favicons');
    await fs.promises.mkdir(outDir, { recursive: true });

    const sizes = [16, 32, 180];
    const pngPaths = [];

    for (const size of sizes) {
      const out = path.join(outDir, `favicon-${size}.png`);
      await sharp(src)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(out);
      pngPaths.push(out);
    }

    // copy 180 as apple-touch-icon
    await fs.promises.copyFile(pngPaths[2], path.join(outDir, 'apple-touch-icon.png'));

    // create favicon.ico from 32 and 16
    const pngToIcoModule = await import('png-to-ico');
    pngToIco = pngToIcoModule.default || pngToIcoModule.imagesToIco || pngToIcoModule;
    const icoBuffer = await pngToIco([pngPaths[1], pngPaths[0]]);
    await fs.promises.writeFile(path.join(outDir, 'favicon.ico'), icoBuffer);

    console.log('Favicons generated in', outDir);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
