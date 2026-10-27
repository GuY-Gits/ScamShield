import {readFileSync,readdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import {resultBand} from '../dist/js/quiz.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const read=name=>JSON.parse(readFileSync(path.join(root,'data',name+'.json'),'utf8'));
const scenarios=read('scenarios'),questions=read('questions'),scams=read('scams');
assert.equal(scenarios.length,12);assert.equal(scams.length,9);assert.equal(questions.length,10);
for(const list of [scenarios,questions,scams])assert.equal(new Set(list.map(i=>i.id)).size,list.length,'IDs must be unique');
for(const q of [...scenarios,...questions]){assert.ok(q.options.length>=3&&q.options.length<=4);assert.equal(q.options.filter(o=>o.id===q.correctOptionId).length,1,'Exactly one valid safe/correct answer');assert.equal(new Set(q.options.map(o=>o.id)).size,q.options.length);assert.ok(q.explanation.length>30);assert.ok(scams.some(s=>s.id===(q.relatedScamId??q.topic)));}
for(const s of scams){for(const key of ['warningSigns','prevention','nextSteps'])assert.ok(s[key].length>=2);}
for(const [n,band]of [[0,'Beginner'],[4,'Beginner'],[5,'Developing Awareness'],[7,'Developing Awareness'],[8,'Cyber Aware'],[10,'Cyber Aware']])assert.equal(resultBand(n),band);
const main=readFileSync(path.join(root,'js/main.js'),'utf8');assert.ok(main.includes('https://cybercrime.gov.in/'));assert.ok(main.includes('tel:1930'));
const content=[...scenarios,...questions,...scams].map(q=>JSON.stringify(q)).join('');assert.ok(!/https?:\/\//.test(content),'Fictional content must not contain active URLs');
for(const name of readdirSync(path.join(root,'js'))){const source=readFileSync(path.join(root,'js',name),'utf8');assert.ok(!/localStorage|sessionStorage|sendBeacon|XMLHttpRequest/.test(source),'No persistent personal data or telemetry');}
console.log('PASS: content counts, unique IDs, answer keys, linked topics, explanations, result-band boundaries, official reporting links, fictional URL safety and no telemetry.');

for(const id of ['phishing','payments','impersonation','malware','adware'])assert.ok(scenarios.some(s=>s.track===id));
for(const s of scenarios){assert.ok(s.context);assert.ok(s.screen);if(s.image)assert.ok(readFileSync(path.join(root,s.image)).length>1000);}
for(const q of [...scenarios,...questions])for(const o of q.options)assert.ok(o.rationale?.length>25,'Every near-miss needs an explanatory rationale');
const html=readFileSync(path.join(root,'index.html'),'utf8');assert.ok(html.includes('id="boot-skip"'));assert.ok(html.includes('<noscript>'));
const boot=readFileSync(path.join(root,'js/boot.js'),'utf8');assert.ok(boot.includes('setTimeout(dismiss,5000)'));assert.ok(boot.includes('prefers-reduced-motion'));assert.ok(boot.includes("event.key==='Escape'"));
console.log('PASS: 66 option rationales, skippable loader, reduced-motion handling and five-second failure fallback.');
