// 기본 오프라인 캐싱: 앱 셸(HTML/manifest/아이콘)만 캐시하고,
// Firebase 등 외부 API 요청은 항상 네트워크로 보내 실시간 동기화를 방해하지 않는다.
// same-origin 요청은 "네트워크 우선, 실패 시 캐시" 전략으로 최신 버전을 우선한다.
const CACHE_NAME = "jumprope-score-v5";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => Promise.all(APP_SHELL.map((url) => cache.add(url).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return; // Firebase 등 외부 요청은 그대로 통과

  e.respondWith(
    // cache:"no-store" — 브라우저의 일반 HTTP 캐시를 건너뛰고 항상 서버에서 새로
    // 받아온다. (오프라인 대비용 캐시는 아래에서 별도로 우리가 직접 관리한다.)
    fetch(e.request, {cache: "no-store"})
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
