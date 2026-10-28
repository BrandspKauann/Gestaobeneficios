import test from 'node:test';
import assert from 'node:assert/strict';
test('PAT guide is server rendered with image, unique metadata and sources',async()=>{
 const {default:worker}=await import('../dist/server/index.js');
 const slug='recadastramento-pat-novembro-2026-rh-contabilidade';
 const response=await worker.fetch(new Request('https://www.gestaobeneficios.com.br/artigos/'+slug),{ASSETS:{fetch:async()=>new Response('',{status:404})}},{waitUntil(){},passThroughOnException(){}});
 assert.equal(response.status,200);
 const html=await response.text();
 assert.equal((html.match(/<h1>/g)||[]).length,1);
 assert.match(html,/weekly-editorial-cover/);
 assert.ok(html.includes('MTE: prazo e orientações'));
 assert.ok(html.includes('Imagem ilustrativa gerada por IA.'));
 assert.ok(html.includes('property="og:image"'));
 assert.ok(html.includes('/images/editorial/'+slug+'.webp'));
});
