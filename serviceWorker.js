// Install the service worker

// Static cache will not be deleted.
// Use versioning
let staticCache = 'restaurant-app-cache-v1';

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
  './js/restaurant_info.js',
  './js/sw-register.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    // Open cache
    caches.open(staticCache)
    // Add files to cache
    .then( cache => cache.addAll(urlsToCache) )
  );
});

// Fetch files from cache
self.addEventListener('fetch', event => {
  let staticCache = ''
  event.respondWith(
    // See if any of the requests that the page makes (images, scripts etc) are
    // stored in the cache...
    caches.match(event.request)
      // ...if any are stored in the cache, use them on the page. Else make a
      // fetch request
      .then( response => response || fetch(event.request) )
  )
})

// Update cache
self.addEventListener('activate', event => {
  event.waitUntil(
    // caches.keys() returns a Promise which resolves to an array of cache names
    // e.g. ['restaurant-app-cache-v1', 'restaurant-app-cache-v2', ... ]
    caches.keys()
    // This array is passed into Promise.all(), which takes in an array as an
    // argument
    .then(
      // Filter out caches not equal to the static cache, which is the one
      // we don't want to delete
      caches.filter( cache => cache !== staticCache )
      // Delete these non-static cache caches
      .map( cache => caches.delete(cache) )

    )
  )
})
