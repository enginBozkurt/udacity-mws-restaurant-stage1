const cacheName = 'restaurant-app-v1';
//the files to cache(the static HTML,CSS, and image files)
const filesToCache = [
    'restaurant.html',
    'index.html',
    'js/main.js',
    'js/dbhelper.js',
    'js/restaurant_info.js',
    'css/styles.css',
    'data/restaurants.json'
];

/*create the cache with caches.open and use the addAll method to add the files
to the cache. We wrap this in event.waitUntil to extend the lifetime of the
event until all of the files are added to the cache and addAll resolves
successfully */
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {cache.addAll(filesToCache);})
    )
});

/*fetch event listener intercepts all requests
first check the cache for the requested resource (with caches.match) and then,
if that fails, we send the request to the network.
*/
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        })
    )
});
