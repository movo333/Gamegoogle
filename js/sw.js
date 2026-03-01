const CACHE = 'superpio-v1';
const ASSETS = [
  '/', '/index.html', '/js/game.js', '/js/levels.js'
];

// تثبيت: حفظ الملفات الأساسية
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

// تفعيل: حذف الكاش القديم
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// طلب: من الكاش أولاً، ثم الشبكة
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        // حفظ الأصول في الكاش
        if (res.ok && (
          e.request.url.includes('/assets/') ||
          e.request.url.includes('/sounds/') ||
          e.request.url.includes('/enemies/') ||
          e.request.url.includes('.png') ||
          e.request.url.includes('.ogg')
        )) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
