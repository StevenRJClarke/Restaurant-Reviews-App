// Install the service worker

// Files to cache
let urlsToCache = [
  './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant.info.js',
  './js/sw-register.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    // Open cache
    caches.open('cache')
    // Add files to cache
    .then( cache => cache.addAll(urlsToCache) )
  );
});
