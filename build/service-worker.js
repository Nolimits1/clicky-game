/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/clicky-game/precache-manifest.ca6d15c625b7976d3fb7ba25631dc82f.js"
=======
  "/clicky-game/precache-manifest.1c18b599c54797cf9da7da010e076089.js"
>>>>>>> f9fef7e62c2d06fdfdd5d8369e2898b47f4f1917
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/clicky-game/index.html"), {
  
<<<<<<< HEAD
  blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
=======
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
>>>>>>> f9fef7e62c2d06fdfdd5d8369e2898b47f4f1917
});
