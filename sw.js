// 오프라인 캐싱은 하지 않는다 — Firebase 실시간 동기화가 핵심이라 캐시로 대신할 수 없다.
// 이 파일의 유일한 목적은 PWA 설치 조건(등록된 서비스워커 + fetch 핸들러)을 만족시키는 것이다.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request));
});
