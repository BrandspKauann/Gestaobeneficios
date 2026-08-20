import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  assert.match(html, /Reduza o custo oculto/);
  assert.match(html, /Quero meu diagnóstico gratuito/);
  assert.match(html, /Gestão de Benefícios \| Reduza custos e retrabalho no RH/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
  assert.doesNotMatch(html, /↗|→|↑|←/);
  assert.doesNotMatch(html, /↻|≠|⌁/);
  assert.match(html, /equipe-rh-operacao-beneficios-ai\.webp/);
  assert.match(html, /categoria-saude-bem-estar-ai\.webp/);
  assert.match(html, /categorias\/vale-saude-bem-estar/);
  assert.match(html, /categorias\/beneficio-juridico/);
  assert.match(html, /categorias\/antecipacao-salarial/);
  assert.match(html, /categorias\/gestao-integrada-folha/);
  assert.match(html, /Entre em contato/);
  assert.match(html, /contato@hirayamacorretora\.com\.br/);
  assert.match(html, /www\.linkedin\.com\/in\/ewertonhirayama/);
  assert.match(html, /www\.facebook\.com\/CorretoraHirayama/);
  assert.match(html, /www\.instagram\.com\/ewertonhirayamaoficial/);
  assert.match(html, /politica-de-privacidade/);
  assert.match(html, /Redes sociais da Hirayama/);
  assert.match(html, /by Hirayama/);
  assert.match(html, /gestao-beneficios-favicon-v2\.ico/);
  assert.match(html, /gestao-beneficios-icon-v2\.png/);
  assert.match(html, /apple-touch-icon\.png/);
  assert.match(html, /site\.webmanifest/);
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

test("renders all four categories as complete editorial articles", async () => {
  const categoryRoutes = [
    ["/categorias/vale-saude-bem-estar", "Acesso real"],
    ["/categorias/beneficio-juridico", "Acesso confidencial"],
    ["/categorias/antecipacao-salarial", "Natureza do produto"],
    ["/categorias/gestao-integrada-folha", "Arquitetura"],
  ];

  for (const [pathname, uniqueContent] of categoryRoutes) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /ENTENDA A CATEGORIA/);
    assert.match(html, /COMO FUNCIONA NA PRÁTICA/);
    assert.match(html, /CRITÉRIOS DE DECISÃO/);
    assert.match(html, /ROTEIRO DE AUDITORIA/);
    assert.match(html, new RegExp(uniqueContent));
    assert.match(html, /"@type":"Article"/);
  }
});

test("renders the interactive diagnostic route", async () => {
  const response = await render("/diagnostico");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Descubra quanto sua gestão de benefícios pode estar custando/);
  assert.match(html, /Quantos colaboradores a empresa tem/);
});

test("uses full-document links for reliable cross-route navigation", async () => {
  const files = [
    "../app/page.tsx",
    "../app/categorias/page.tsx",
    "../app/components/CategoryTemplate.tsx",
    "../app/components/DiagnosticTool.tsx",
    "../app/components/SiteHeader.tsx",
    "../app/components/SiteFooter.tsx",
    "../app/sobre-o-metodo/page.tsx",
    "../app/para-quem-e/page.tsx",
  ];
  const source = (await Promise.all(files.map((file) => readFile(new URL(file, import.meta.url), "utf8")))).join("\n");
  assert.doesNotMatch(source, /next\/link|<Link\b|<\/Link>/);
});

test("ships favicon files through the standard app metadata convention", async () => {
  const [favicon, icon, appleIcon] = await Promise.all([
    readFile(new URL("../app/favicon.ico", import.meta.url)),
    readFile(new URL("../app/icon.png", import.meta.url)),
    readFile(new URL("../app/apple-icon.png", import.meta.url)),
  ]);

  assert.ok(favicon.byteLength > 500);
  assert.ok(icon.byteLength > 5000);
  assert.ok(appleIcon.byteLength > 1000);
});
