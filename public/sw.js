const CACHE_NAME = 'version-1';
const urlsToCache = [
    'index.html',
    '/static/js/bundle.js',
    'static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    'https://opentdb.com/api_category.php',
    'https://opentdb.com/api.php'
 ];

const self = this;

 //installing sw 
 self.addEventListener("install", function (event) {
    // Perform install steps
    event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then(function (cache) {
          console.log("Opened cache");
          return cache.addAll(urlsToCache);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  });
  
  self.addEventListener("fetch", function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
        
      }).catch(() =>  caches.match('offline.html'))
    );
  });