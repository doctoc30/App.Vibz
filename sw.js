importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

/* Your original PWA service worker code */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
