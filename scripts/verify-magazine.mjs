// Browser smoke test using Node's built-in WebSocket and an installed Chromium browser.
// Run after npm run build. Override BROWSER_PATH for a different Chromium executable.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
const browserPath = process.env.BROWSER_PATH ?? 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'magazine-browser-'));
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4173','--strictPort'], {windowsHide:true,stdio:'ignore'});
const browser = spawn(browserPath, ['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9333',`--user-data-dir=${profile}`,'about:blank'], {windowsHide:true,stdio:'ignore'});
const pause = ms => new Promise(r=>setTimeout(r,ms));
let socket;
try {
  let targets;
  for(let i=0;i<20;i++){try{targets=await (await fetch('http://127.0.0.1:9333/json',{signal:AbortSignal.timeout(500)})).json();if(targets.length)break;}catch{}await pause(250);}
  assert(targets?.length,'Browser debugging endpoint did not start');
  socket=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject;});
  let id=0;const pending=new Map();const errors=[];
  socket.onmessage=event=>{const m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);if(m.id){const p=pending.get(m.id);pending.delete(m.id);if(m.error)p.reject(m.error);else p.resolve(m.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;const timeout=setTimeout(()=>reject(new Error(`CDP timeout: ${method}`)),10000);pending.set(n,{resolve:value=>{clearTimeout(timeout);resolve(value);},reject:error=>{clearTimeout(timeout);reject(error);}});socket.send(JSON.stringify({id:n,method,params}));});
  const evaluate=async expression=>{const result=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});assert(!result.exceptionDetails,JSON.stringify(result.exceptionDetails));return result.result.value;};
  await send('Runtime.enable');await send('Page.enable');
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await send('Page.navigate',{url:'http://127.0.0.1:4173'});
  for(let i=0;i<60;i++){if(await evaluate('!!document.querySelector(".book-stage")'))break;await pause(100);}
  const goto=async n=>{await evaluate(`window.dispatchEvent(new CustomEvent('magazine:goto',{detail:${n}}))`);await pause(100);};
  for(const width of [1280,390,320]){
    await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<700});
    for(let n=1;n<=39;n++){await goto(n);assert(await evaluate('!!document.querySelector(".page-wrap h1")'),`Missing title ${n}`);assert(await evaluate('document.documentElement.scrollWidth <= innerWidth'),`Horizontal overflow page ${n}, width ${width}`);assert(await evaluate('[...document.images].every(i=>i.complete && i.naturalWidth>0 && i.alt.length>0)'),`Broken image ${n}`);}
  }
  await goto(5);assert(await evaluate('document.querySelector("details")?.open === false'),'Details should start collapsed');
  await evaluate('document.querySelector("summary").focus()');await send('Input.dispatchKeyEvent',{type:'keyDown',key:' ',code:'Space',windowsVirtualKeyCode:32});await send('Input.dispatchKeyEvent',{type:'keyUp',key:' ',code:'Space',windowsVirtualKeyCode:32});await pause(80);
  assert(await evaluate('document.querySelector("details").open'),'Space opens details');assert(await evaluate('document.querySelector(".page-count strong").textContent === "05"'),'Space should not navigate from summary');
  await goto(37);await evaluate('document.querySelectorAll(".options button")[0].click()');assert(await evaluate('document.querySelector(".quiz-feedback strong").textContent === "Chưa đúng"'),'Wrong answer feedback');await evaluate('document.querySelectorAll(".options button")[1].click()');assert(await evaluate('document.querySelector(".quiz-feedback strong").textContent === "Chưa đúng"'),'Answer remains locked');
  await evaluate('document.querySelector("[aria-controls=magazine-toc]").click()');await pause(100);assert(await evaluate('document.querySelector("[role=dialog]").contains(document.activeElement)'),'Drawer focus');
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await pause(300);assert(await evaluate('document.activeElement.getAttribute("aria-label") === "Mở mục lục"'),'Focus restored');
  await goto(28);await send('Emulation.setDeviceMetricsOverride',{width:1280,height:1000,deviceScaleFactor:1,mobile:false});await pause(150);
  fs.mkdirSync('artifacts',{recursive:true});const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true});fs.writeFileSync('artifacts/class-nation-desktop.png',Buffer.from(shot.data,'base64'));
  await goto(24);await send('Emulation.setDeviceMetricsOverride',{width:390,height:1000,deviceScaleFactor:1,mobile:true});await pause(150);const mobile=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true});fs.writeFileSync('artifacts/community-mobile.png',Buffer.from(mobile.data,'base64'));
  assert.deepEqual(errors,[]);console.log('PASS: 39 pages at 1280/390/320px; images, overflow, details keyboard, quiz answer locking, dialog focus/Escape; no runtime exceptions.');
} finally {
  socket?.close();browser.kill();server.kill();
  // The isolated browser profile is left in the OS temporary directory.
}
