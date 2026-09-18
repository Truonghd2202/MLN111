import { chromium, expect } from '@playwright/test';
import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
const source=await fs.readFile('src/data/content.ts');
if(!source.equals(execFileSync('git',['show','HEAD:src/data/content.ts'])))throw new Error('Content contract changed');
const browser=await chromium.launch({channel:'chrome',headless:true});
const report={contentUnchanged:true,viewports:[],errors:[],interactions:[]};
const sizes=[[1440,900],[1024,768],[768,1024],[390,844]];
await fs.mkdir('qa/screenshots',{recursive:true});
for(const [width,height] of sizes){
 const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
 page.on('pageerror',e=>report.errors.push(e.message));
 await page.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 await expect(page.locator('[data-page]')).toHaveCount(39);
 const overflows=[];
 for(const [label,selector] of [['cover','#scene-1'],['definition','#scene-6'],['origin','#scene-10'],['struggle','#dau-tranh'],['nation','#dan-toc'],['relation','#quan-he'],['loi-nho','#scene-32'],['quiz','#scene-37'],['summary','#scene-38']]){
  await page.locator(selector).scrollIntoViewIfNeeded();
  await page.evaluate(selector=>{const el=document.querySelector(selector);window.scrollTo(0,el.getBoundingClientRect().top+window.scrollY)},selector);
  await page.locator(selector).locator('img').evaluateAll(async images=>{await Promise.all(images.map(img=>img.decode().catch(()=>{})))});
  await page.screenshot({path:`qa/screenshots/${width}-${label}.png`});
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  if(overflow)overflows.push(label);
 }
 const broken=await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src));
 report.viewports.push({width,height,overflows,broken});
 if(width===1440){
  await page.locator('.site-header button').click();await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).not.toBeVisible();report.interactions.push('Menu opens and Escape closes');
  await page.locator('.system-node').nth(2).click();await expect(page.locator('.diagram-explanation h4')).toHaveText('Cách thức hưởng thụ');
  await page.locator('.diagram-explanation summary').click();await expect(page.locator('.diagram-explanation details')).toHaveAttribute('open','');report.interactions.push('Diagram selects and expands details');
  await page.locator('#scene-9 .timeline-stages button').nth(3).click();await expect(page.locator('#scene-9 .timeline-detail h4')).toHaveText('Tư bản chủ nghĩa');report.interactions.push('Timeline changes content');
  await page.locator('#scene-22 .annotation-markers button').nth(4).click();await expect(page.locator('#scene-22 .annotation-copy h4')).toHaveText('Nhà nước và pháp luật thống nhất');report.interactions.push('Nation annotations switch');
  const answers=[1,2,0,3,1,2,0,3];
  for(let i=0;i<8;i++){await page.locator('.quiz-options button').nth(answers[i]).click();await expect(page.locator('.quiz-feedback')).toContainText('Chính xác.');await page.locator('.quiz-navigation button').last().click()}
  await expect(page.locator('.quiz-content')).toContainText('8/8');
  await page.getByRole('button',{name:'Xem lại lời giải'}).click();await expect(page.locator('.quiz-feedback')).toBeVisible();
  for(let i=0;i<8;i++)await page.locator('.quiz-navigation button').last().click();
  await page.getByRole('button',{name:'Làm lại từ đầu'}).click();await expect(page.locator('.quiz-feedback')).toHaveCount(0);await page.locator('.quiz-options button').nth(0).click();await expect(page.locator('.quiz-feedback')).toContainText('Hãy nhìn lại');report.interactions.push('Quiz 8/8, review, retry, wrong answer');
 }
 await page.close();
}
await fs.writeFile('qa/results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));await browser.close();
if(report.errors.length||report.viewports.some(v=>v.overflows.length||v.broken.length))process.exitCode=1;
