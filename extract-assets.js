import sharp from 'sharp';
import fs from 'fs';

async function run() {
  if (!fs.existsSync('./src/assets')) fs.mkdirSync('./src/assets', { recursive: true });
  const darkImg = 'C:/Users/Rayan/.gemini/antigravity/brain/2f5d0bf3-e072-4cd2-9d5a-8e6a02b39e45/.user_uploaded/media_1793622886505_0ce1b0a2.jpg';
  const lightImg = 'C:/Users/Rayan/.gemini/antigravity/brain/2f5d0bf3-e072-4cd2-9d5a-8e6a02b39e45/.user_uploaded/media_1793622886505_f71b761c.jpg';
  
  // Hero photo from dark image: card starts around x: 35, y: 90, width: 251, height: 325
  await sharp(darkImg).extract({ left: 35, top: 90, width: 251, height: 325 }).toFile('./src/assets/hero-matheus-full.png');
  // Just the top photo part of hero (before the red gradient overlay)
  await sharp(darkImg).extract({ left: 35, top: 90, width: 251, height: 230 }).toFile('./src/assets/hero-matheus-photo.png');

  // Card 1: Form phone mockup
  await sharp(darkImg).extract({ left: 200, top: 460, width: 85, height: 85 }).toFile('./src/assets/card-form-phone.png');

  // Card 2: About photo (gym selfie dark, and lab coat light)
  await sharp(darkImg).extract({ left: 190, top: 556, width: 95, height: 82 }).toFile('./src/assets/card-about-dark.png');
  await sharp(lightImg).extract({ left: 190, top: 556, width: 95, height: 82 }).toFile('./src/assets/card-about-light.png');

  // Card 3: Students photo
  await sharp(darkImg).extract({ left: 195, top: 650, width: 90, height: 85 }).toFile('./src/assets/card-students.png');

  // Top logo
  await sharp(darkImg).extract({ left: 120, top: 18, width: 80, height: 50 }).toFile('./src/assets/logo-cropped.png');

  console.log('Successfully cropped assets from reference images!');
}

run().catch(console.error);

