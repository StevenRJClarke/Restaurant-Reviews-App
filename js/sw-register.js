// Taken from https:developers.google.com/web/fundamentals/primers/service-workers
if ('serviceWorker' in navigator) {
  window.addListener('load', () => {
    navigator.serviceWorker.register('./serviceWorker.js')
    .then( registration => console.log('ServiceWorker registration successful with scope: ', registration.scope) )
    .catch( error => console.log('ServiceWorker registration failed: ', error));
  });
}
