const CACHE_NAME = 'version-1';
const urlsToCache = [
    'index.html',
    '/static/js/bundle.js',
    'static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    'https://opentdb.com/api_category.php',
 ];

const self = this;

 //installing sw 
self.addEventListener('install', (event) => {
      event.waitUntil(
          caches.open(CACHE_NAME)
          .then((cache) => {
              console.log('Opened cache');
              return cache.addAll(urlsToCache)
          })
      )
})

// requesting

self.addEventListener('fetch', (event) => {
     event.respondWith(
         caches.match(event.request)
         .then(() => {
             return fetch(event.request)
             .catch(() =>  caches.match('index.html'))
         })
     )
})
