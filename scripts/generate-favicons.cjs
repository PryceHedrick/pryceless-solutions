const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 1200, name: 'og-image.png' } // For social sharing
];

const svgPath = path.join(__dirname, '..', 'public', 'favicon.svg');
const outputDir = path.join(__dirname, '..', 'public');

async function generateFavicons() {
  const svg = fs.readFileSync(svgPath);

  for (const { size, name } of sizes) {
    const outputPath = path.join(outputDir, name);

    if (name === 'og-image.png') {
      // Create a larger OG image with padding/background
      await sharp({
        create: {
          width: 1200,
          height: 630,
          channels: 4,
          background: { r: 15, g: 23, b: 42, alpha: 1 } // slate-900
        }
      })
        .composite([{
          input: await sharp(svg)
            .resize(300, 300)
            .toBuffer(),
          gravity: 'center'
        }])
        .png()
        .toFile(outputPath);
    } else {
      await sharp(svg)
        .resize(size, size)
        .png()
        .toFile(outputPath);
    }

    console.log(`Generated: ${name}`);
  }

  console.log('All favicons generated!');
}

generateFavicons().catch(console.error);
