const CACHE_NAME = 'superpio-v3';

// كل الأصول التي تُحفظ عند التثبيت
const PRECACHE = ["/", "/index.html", "/js/game.js", "/js/levels.js", "/sw.js", "/assets/character/idle1.png", "/assets/character/idle2.png", "/assets/character/idle3.png", "/assets/character/idle4.png", "/assets/character/idle5.png", "/assets/character/idle6.png", "/assets/character/idle7.png", "/assets/character/idle8.png", "/assets/character/idle9.png", "/assets/character/idle10.png", "/assets/character/run1.png", "/assets/character/run2.png", "/assets/character/run3.png", "/assets/character/run4.png", "/assets/character/run5.png", "/assets/character/run6.png", "/assets/character/run7.png", "/assets/character/run8.png", "/assets/character/jump1.png", "/assets/character/jump2.png", "/assets/character/jump3.png", "/assets/character/jump4.png", "/assets/character/jump5.png", "/assets/character/jump6.png", "/assets/character/jump7.png", "/assets/character/jump8.png", "/assets/character/jump9.png", "/assets/character/jump10.png", "/assets/character/dead1.png", "/assets/character/dead2.png", "/assets/character/dead3.png", "/assets/character/dead4.png", "/assets/character/dead5.png", "/assets/character/dead6.png", "/assets/character/dead7.png", "/assets/character/dead8.png", "/assets/character/dead9.png", "/assets/character/dead10.png", "/assets/character/shoot1.png", "/assets/character/shoot2.png", "/assets/character/shoot3.png", "/assets/enemies/snail1.png", "/assets/enemies/snail2.png", "/assets/enemies/snail3.png", "/assets/enemies/bat1.png", "/assets/enemies/bat2.png", "/assets/enemies/bat3.png", "/assets/enemies/tuca1.png", "/assets/enemies/tuca2.png", "/assets/enemies/tuca3.png", "/assets/enemies/spikebee1.png", "/assets/enemies/spikebee2.png", "/assets/enemies/spikebee3.png", "/assets/enemies/spikebee4.png", "/assets/tiles/nature/1.png", "/assets/tiles/nature/2.png", "/assets/tiles/nature/3.png", "/assets/tiles/nature/4.png", "/assets/tiles/nature/5.png", "/assets/tiles/nature/6.png", "/assets/tiles/nature/7.png", "/assets/tiles/nature/8.png", "/assets/tiles/nature/9.png", "/assets/tiles/nature/10.png", "/assets/tiles/nature/11.png", "/assets/tiles/nature/12.png", "/assets/tiles/nature/13.png", "/assets/tiles/nature/14.png", "/assets/tiles/nature/15.png", "/assets/tiles/nature/16.png", "/assets/tiles/nature/17.png", "/assets/tiles/nature/18.png", "/assets/tiles/graveyard/1.png", "/assets/tiles/graveyard/2.png", "/assets/tiles/graveyard/3.png", "/assets/tiles/graveyard/4.png", "/assets/tiles/graveyard/5.png", "/assets/tiles/graveyard/6.png", "/assets/tiles/graveyard/7.png", "/assets/tiles/graveyard/8.png", "/assets/tiles/graveyard/9.png", "/assets/tiles/graveyard/10.png", "/assets/tiles/graveyard/11.png", "/assets/tiles/graveyard/12.png", "/assets/tiles/graveyard/13.png", "/assets/tiles/graveyard/14.png", "/assets/tiles/graveyard/15.png", "/assets/tiles/graveyard/16.png", "/assets/tiles/winter/1.png", "/assets/tiles/winter/2.png", "/assets/tiles/winter/3.png", "/assets/tiles/winter/4.png", "/assets/tiles/winter/5.png", "/assets/tiles/winter/6.png", "/assets/tiles/winter/7.png", "/assets/tiles/winter/8.png", "/assets/tiles/winter/9.png", "/assets/tiles/winter/10.png", "/assets/tiles/winter/11.png", "/assets/tiles/winter/12.png", "/assets/tiles/winter/13.png", "/assets/tiles/winter/14.png", "/assets/tiles/winter/15.png", "/assets/tiles/winter/16.png", "/assets/tiles/winter/17.png", "/assets/tiles/winter/18.png", "/assets/tiles/desert/1.png", "/assets/tiles/desert/2.png", "/assets/tiles/desert/3.png", "/assets/tiles/desert/4.png", "/assets/tiles/desert/5.png", "/assets/tiles/desert/6.png", "/assets/tiles/desert/7.png", "/assets/tiles/desert/8.png", "/assets/tiles/desert/9.png", "/assets/tiles/desert/10.png", "/assets/tiles/desert/11.png", "/assets/tiles/desert/12.png", "/assets/tiles/desert/13.png", "/assets/tiles/desert/14.png", "/assets/tiles/desert/15.png", "/assets/tiles/desert/16.png", "/assets/tiles/graveyard/bone1.png", "/assets/tiles/graveyard/bone2.png", "/assets/tiles/graveyard/bone3.png", "/assets/tiles/graveyard/bone4.png", "/assets/bg/nature_bg.png", "/assets/bg/graveyard_bg.png", "/assets/bg/winter_bg.png", "/assets/bg/desert_bg.png", "/assets/ui/splash_screen.png", "/assets/ui/sky_bg.png", "/assets/ui/world_nature.png", "/assets/ui/world_graveyard.png", "/assets/ui/world_winter.png", "/assets/ui/world_desert.png", "/assets/ui/levels_panel.png", "/assets/buttons/coin.png", "/assets/buttons/bullet.png", "/assets/buttons/banner_win.png", "/assets/buttons/banner_lose.png", "/assets/buttons/btn_retry.png", "/assets/buttons/btn_shoot.png", "/assets/buttons/btn_left.png", "/assets/buttons/btn_right.png", "/assets/buttons/btn_Jumping.png", "/assets/buttons/Restart_button.png", "/assets/objects/nature/Tree_1.png", "/assets/objects/nature/Tree_2.png", "/assets/objects/nature/Tree_3.png", "/assets/objects/nature/Bush__1_.png", "/assets/objects/nature/Bush__2_.png", "/assets/objects/nature/Bush__3_.png", "/assets/objects/nature/Mushroom_1.png", "/assets/objects/nature/Mushroom_2.png", "/assets/objects/nature/Stone.png", "/assets/objects/nature/Crate.png", "/assets/sounds/coin.ogg", "/assets/sounds/jump.ogg", "/assets/sounds/hit.ogg", "/assets/sounds/break.ogg", "/assets/sounds/heartc.ogg", "/assets/sounds/completed.ogg", "/assets/sounds/loselife.ogg", "/assets/sounds/basho.ogg", "/assets/sounds/jumper.ogg", "/assets/sounds/spike.ogg", "/assets/sounds/afterfall.ogg", "/assets/sounds/fall.ogg", "/assets/sounds/wimpact.ogg", "/assets/sounds/step.ogg", "/assets/sounds/purchase.ogg", "/assets/sounds/timeover.ogg", "/assets/sounds/arrival.ogg", "/assets/sounds/click.ogg", "/assets/sounds/trow.ogg", "/assets/sounds/land.ogg"];

// تثبيت: حفظ كل الأصول مسبقاً
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // نحاول حفظ كل ملف بشكل منفصل — إذا فشل أحدها لا يوقف الباقي
      return Promise.allSettled(
        PRECACHE.map(url =>
          cache.add(url).catch(() => console.log('[SW] Skip:', url))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// تفعيل: حذف الكاش القديم
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// طلب: من الكاش أولاً، ثم الشبكة مع حفظ
self.addEventListener('fetch', e => {
  // تجاهل طلبات غير GET
  if (e.request.method !== 'GET') return;
  // تجاهل طلبات خارجية (Supabase, Pi, Google)
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached || new Response('Offline', {status: 503}));
    })
  );
});
