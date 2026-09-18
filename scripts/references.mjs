import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:900},ignoreHTTPSErrors:true});
const result=[];
for(const [i,url] of ['https://mln201.103-38-236-6.sslip.io/','https://letuankiet-04.github.io/MLN111/'].entries()){
 try {await page.goto(url,{waitUntil:'domcontentloaded',timeout:25000}); await page.screenshot({path:`qa/reference-${i}.png`});result.push({url,title:await page.title(),text:(await page.locator('body').innerText()).slice(0,6500)});}catch(e){result.push({url,error:e.message});}
}
await fs.writeFile('qa/references.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));await browser.close();
