import path from 'node:path';
import fs from 'fs-extra';
import { globby } from 'globby';
import Spritesmith from 'spritesmith';

const SRC_DIR = './atlas';
const OUT_ATLAS = './src/assets/atlas.png';
const OUT_CSS = './src/atlas.css';

async function main() {
  await fs.ensureDir('./dist');

  // Load all PNGs in directory
  const files = await globby([`${SRC_DIR}/*.png`]);

  // Pack via Spritesmith
  const { image, coordinates } = await new Promise((resolve, reject) => {
    Spritesmith.run({ src: files }, (err, result) =>
      err ? reject(err) : resolve(result),
    );
  });

  // Write atlas
  await fs.writeFile(OUT_ATLAS, image);

  // Generate CSS vars
  let css = '/* Auto-generated atlas variables */\n:root {\n';
  for (const fullPath in coordinates) {
    const { x, y, width, height } = coordinates[fullPath];
    const name = path.basename(fullPath, '.png');

    css += `  --eo-ui-${name}-x: -${x}px;\n`;
    css += `  --eo-ui-${name}-y: -${y}px;\n`;
    css += `  --eo-ui-${name}-w: ${width}px;\n`;
    css += `  --eo-ui-${name}-h: ${height}px;\n`;
  }
  css += '}\n';

  await fs.writeFile(OUT_CSS, css);

  console.log('Done! Created:', OUT_ATLAS, 'and', OUT_CSS);
}

main();
