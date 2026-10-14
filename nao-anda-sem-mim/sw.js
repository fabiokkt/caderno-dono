// Caderno "Sem Mim": guarda a página pra abrir sem internet. Sempre tenta a internet primeiro,
// então uma versão nova do caderno aparece na próxima vez que a pessoa abrir com sinal.
// O que a pessoa escreve não passa por aqui: fica no próprio aparelho (localStorage).
const CACHE = "caderno-sem-mim-v1";
const BASE = ["./", "manifest.webmanifest", "apple-touch-icon.png", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith("caderno-sem-mim-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(r).then(res => {
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(r, copia)); }
      return res;
    }).catch(() => caches.match(r, { ignoreSearch: true })
      .then(m => m || (r.mode === "navigate" ? caches.match("./") : Response.error())))
  );
});
