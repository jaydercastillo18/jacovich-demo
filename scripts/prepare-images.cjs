const sharp = require('sharp');
const fs = require('node:fs');
const path = require('node:path');
const source = process.argv[2];
if (!source) throw new Error('Pass the generated asset directory.');
const output = path.join(process.cwd(), 'public', 'images');
fs.mkdirSync(output, { recursive: true });
async function main() {
  await sharp(path.join(source, 'exec-a5413b1c-463a-4740-a2e6-52e0069cbd5d.png')).resize({ width: 1536 }).webp({ quality: 84 }).toFile(path.join(output, 'barbershop.webp'));
  await sharp(path.join(source, 'exec-ca198742-5554-4d00-a8c2-727931547828.png')).resize({ width: 1200 }).webp({ quality: 82 }).toFile(path.join(output, 'ritual.webp'));
  const portraits = path.join(source, 'exec-a0f31d26-dbea-4dd5-ba69-d30a9f1c2051.png');
  const { width, height } = await sharp(portraits).metadata();
  const panel = Math.floor(width / 3);
  for (let i = 0; i < 3; i++) await sharp(portraits).extract({ left: i * panel, top: 0, width: panel, height }).resize({ width: 512 }).webp({ quality: 80 }).toFile(path.join(output, `barbero-0${i+1}.webp`));
  for (const name of fs.readdirSync(output)) console.log(name, Math.round(fs.statSync(path.join(output, name)).size / 1024) + ' KB');
}
main().catch(e => { console.error(e); process.exit(1); });
