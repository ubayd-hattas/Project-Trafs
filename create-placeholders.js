const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public', 'placeholders');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Minimal valid 1x1 JPEG (gray)
const jpegData = Buffer.from(
  'ffd8ffe000104a46494600010101004800480000ffdb004300080606070605080707070909080a0c140d0c0b0b0c1912130f141d1a1f1e1d1a1c1c20242e2720222c231c1c2837292c30313434341f27393d38323c2e333432ffdb0043010909090c0b0c180d0d1832211c213232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232ffc00011080001000103012200021101031101ffc4001500010100000000000000000000000000000005ffc40014100100000000000000000000000000000000ffc4001501010100000000000000000000000000000102ffc40014110100000000000000000000000000000000ffda000c03010002110311003f001420d27ffd9',
  'hex'
);

const files = [
  'hero.jpg',
  'history.jpg',
  'principal.jpg',
  'students.jpg',
  'science-lab.jpg',
  'sports.jpg',
  'choir.jpg',
  'assembly.jpg',
  'gallery-1.jpg',
  'gallery-2.jpg',
  'gallery-3.jpg'
];

for (const file of files) {
  fs.writeFileSync(path.join(publicDir, file), jpegData);
}

// For mp4, we will just create an empty file. It might not play, but it will exist for Next.js to not crash during build if referenced.
fs.writeFileSync(path.join(publicDir, 'hero-video.mp4'), Buffer.from(''));

console.log('Placeholders created.');
