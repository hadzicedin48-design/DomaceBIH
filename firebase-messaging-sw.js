importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDgXYpb32iMlAJBeZyLgP6xC8mWfpytsiM",
  authDomain: "domacebih-99bc3.firebaseapp.com",
  projectId: "domacebih-99bc3",
  storageBucket: "domacebih-99bc3.firebasestorage.app",
  messagingSenderId: "990089586929",
  appId: "1:990089586929:web:1c643f76a92405a5c8e150"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || "Domaće";
  const options = {
    body: payload.notification?.body || "Nova obavijest",
    icon: "./logo.png",
    badge: "./logo.png",
    tag: "domace-notification",
    renotify: true
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./'));
});
