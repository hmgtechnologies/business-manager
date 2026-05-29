/* HMG Enterprise v5.0 — Service Worker */
const CACHE='hmg-enterprise-v5';
const URLS=[
  './', './index.html', './sales.html', './inventory.html',
  './expenses.html', './customers.html', './suppliers.html',
  './register.html', './journal.html', './staff.html',
  './budgets.html', './credits.html', './reports.html',
  './settings.html', './manifest.json',
  './css/style.css', './js/storage.js', './js/app.js'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    if(res.status===200){const cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl))}return res;
  }).catch(()=>caches.match('./index.html')));
});
