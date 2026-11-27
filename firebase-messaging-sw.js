// firebase-messaging-sw.js - Service Worker za push notifikacije
// Ostavljen prazan / minimalan jer je sistem notifikacija na zvoncetu u aplikaciji.
// Ako kasnije aktivirate FCM, dodajte konfiguraciju ovdje.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
