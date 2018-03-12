/*The script checks if the browser supports service workers. If it does,
then it registers our currently blank file sw.js as the service worker,
and then logs to the Console */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(function(registration) {
      console.log('Service Worker Registered');
    });
}
    
