const pngToIco = require('png-to-ico');
// dynamic import for Jimp to support ESM/CommonJS differences
let Jimp;
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const src = path.resolve(__dirname, '..', 'artifacts', 'portfolio', 'src', 'assets', 'logo_PW.png');
    const JimpModule = await import('jimp');
    // Jimp v1 exports the class under the `Jimp` key
    Jimp = JimpModule.Jimp || JimpModule.default || JimpModule;
    const outDir = path.resolve(__dirname, '..', 'artifacts', 'portfolio', 'public', 'favicons');
    await fs.promises.mkdir(outDir, { recursive: true });

    const sizes = [16, 32, 180];
    const pngPaths = [];
    for (const size of sizes) {
      const img = await Jimp.read(src);
      // Resize preserving aspect ratio and center on a square transparent canvas
      const ratio = Math.min(size / img.bitmap.width, size / img.bitmap.height);
      const w = Math.max(1, Math.round(img.bitmap.width * ratio));
      const h = Math.max(1, Math.round(img.bitmap.height * ratio));
      img.resize(w, h, Jimp.RESIZE_BICUBIC);
      const canvas = new Jimp(size, size, 0x00000000);
      const x = Math.round((size - w) / 2);
      const y = Math.round((size - h) / 2);
      canvas.composite(img, x, y);
      const out = path.join(outDir, `favicon-${size}.png`);
      await canvas.writeAsync(out);
      pngPaths.push(out);
    }

    // copy 180 as apple-touch-icon
    await fs.promises.copyFile(pngPaths[2], path.join(outDir, 'apple-touch-icon.png'));

    // create favicon.ico from 32 and 16
    const icoBuffer = await pngToIco([pngPaths[1], pngPaths[0]]);
    await fs.promises.writeFile(path.join(outDir, 'favicon.ico'), icoBuffer);

    console.log('Favicons generated in', outDir);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
