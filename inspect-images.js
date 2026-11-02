import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const uploadDir = 'C:/Users/Rayan/.gemini/antigravity/brain/2f5d0bf3-e072-4cd2-9d5a-8e6a02b39e45/.user_uploaded';

async function check() {
  const files = fs.readdirSync(uploadDir);
  for (const f of files) {
    if (f.endsWith('.jpg') || f.endsWith('.png')) {
      const p = path.join(uploadDir, f);
      const meta = await sharp(p).metadata();
      console.log(f, meta.width, 'x', meta.height, meta.format);
    }
  }
}

check();

