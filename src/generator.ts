import fs from 'fs';
import path from 'path';
import { getColorSVG, getMonoSVG, getWhiteSVG } from './logos';

/**
 * Generate a PNG from SVG using sharp (if available)
 */
async function generatePNG(svgString: string, outputPath: string, size: number): Promise<void> {
  // dynamic import — sharp is optional
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const sharp = require('sharp') as typeof import('sharp');
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  await sharp(Buffer.from(svgString)).resize(size, size).png().toFile(outputPath);
}

/**
 * Write SVG file
 */
function writeSVG(svgString: string, outputPath: string): void {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outputPath, svgString, 'utf-8');
}

/**
 * Generate all standard icon assets into outputDir
 */
export async function generateAllIcons(outputDir = 'dist/icons'): Promise<void> {
  const colorSVG = getColorSVG();
  const monoSVG  = getMonoSVG();
  const whiteSVG = getWhiteSVG();

  // SVGs first (always works)
  writeSVG(colorSVG, path.join(outputDir, 'liquidity.svg'));
  writeSVG(monoSVG,  path.join(outputDir, 'liquidity-mono.svg'));
  writeSVG(whiteSVG, path.join(outputDir, 'liquidity-white.svg'));

  console.log('SVG icons written.');

  // PNG sizes (requires sharp)
  try {
    const sizes = [16, 32, 48, 64, 128, 256, 512, 1024];
    for (const size of sizes) {
      await generatePNG(colorSVG, path.join(outputDir, `liquidity-${size}.png`), size);
      await generatePNG(monoSVG,  path.join(outputDir, `liquidity-mono-${size}.png`), size);
    }
    // favicon.ico sizes
    await generatePNG(colorSVG, path.join(outputDir, 'favicon-32.png'), 32);
    await generatePNG(colorSVG, path.join(outputDir, 'favicon-16.png'), 16);
    // Apple touch icon
    await generatePNG(colorSVG, path.join(outputDir, 'apple-touch-icon.png'), 180);
    console.log('PNG icons generated.');
  } catch {
    console.log('sharp not available — skipping PNG generation (SVGs still written).');
  }
}
