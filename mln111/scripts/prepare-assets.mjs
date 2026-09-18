import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const root = 'src/assets/stitch_class_and_nation_editorial_illustration';
const dirs = (await fs.readdir(root)).sort();
const selected = [0,1,2,4,5,6,8,9,11,13,16,18,20,21,24,25,26];
const report = [];
for (const [i, dir] of dirs.entries()) {
 const input = path.join(root, dir, 'screen.png');
 const meta = await sharp(input).metadata();
 const entry = {index:i, name:dir, width:meta.width, height:meta.height, bytes:(await fs.stat(input)).size, used:selected.includes(i)};
 if(entry.used){for(const width of [640,1600]) await sharp(input).resize({width,withoutEnlargement:true}).webp({quality:86}).toFile(path.join(root,dir,`screen-${width}.webp`)); entry.webpBytes=(await fs.stat(path.join(root,dir,'screen-1600.webp'))).size;}
 report.push(entry);
}
await fs.mkdir('qa',{recursive:true});
await fs.writeFile('qa/asset-audit.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({original:report.filter(x=>x.used).reduce((s,x)=>s+x.bytes,0),webp:report.filter(x=>x.used).reduce((s,x)=>s+x.webpBytes,0)}));
