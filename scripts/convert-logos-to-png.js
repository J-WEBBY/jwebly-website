const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logos = [
  { input: 'public/logo.svg', output: 'public/logo.png', width: 400, height: 100 },
  { input: 'public/logo-vertical.svg', output: 'public/logo-vertical.png', width: 240, height: 280 },
  { input: 'public/logo-icon.svg', output: 'public/logo-icon.png', width: 200, height: 200 },
  { input: 'public/logo-black-bg.svg', output: 'public/logo-black-bg.png', width: 400, height: 100 },
];

async function convertLogos() {
  console.log('Converting SVG logos to PNG...\n');
  
  for (const logo of logos) {
    try {
      const inputPath = path.join(__dirname, '..', logo.input);
      const outputPath = path.join(__dirname, '..', logo.output);
      
      if (!fs.existsSync(inputPath)) {
        console.error(`❌ Input file not found: ${logo.input}`);
        continue;
      }
      
      await sharp(inputPath)
        .resize(logo.width, logo.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Created: ${logo.output} (${logo.width}x${logo.height})`);
    } catch (error) {
      console.error(`❌ Error converting ${logo.input}:`, error.message);
    }
  }
  
  console.log('\n✨ Conversion complete!');
}

convertLogos();

