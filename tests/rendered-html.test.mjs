import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`https://www.gestaobeneficios.com.br${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the diagnostic-first homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Benefícios não deveriam ser/);
  assert.match(html, /Diagnosticar minha gestão/);
  assert.match(html, /Gestão de Benefícios \| Diagnóstico para empresas/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
  assert.doesNotMatch(html, /↗|→|↑|←/);
  assert.match(html, /categoria-saude-bem-estar-ai\.webp/);
});

test("renders unique category metadata and FAQ schema", async () => {
  const response = await render("/categorias/beneficio-juridico");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Benefício jurídico para empresas/);
  assert.match(html, /FAQPage/);
  assert.match(html, /https:\/\/www\.gestaobeneficios\.com\.br\/categorias\/beneficio-juridico/);
  assert.match(html, /categoria-cuidado-juridico-ai\.webp/);
  assert.doesNotMatch(html, /\/og\.png/);
});

test("renders a second category with its own primary image metadata", async () => {
  const response = await render("/categorias/vale-saude-bem-estar");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Vale-saúde e bem-estar para empresas/);
  assert.match(html, /categoria-saude-bem-estar-ai\.webp/);
  assert.doesNotMatch(html, /\/og\.png/);
});

test("renders the interactive diagnostic route", async () => {
  const response = await render("/diagnostico");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Quanto a dispersão de benefícios custa ao seu RH/);
  assert.match(html, /Quantos colaboradores a empresa tem/);
});
