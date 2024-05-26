// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");


const firebaseConfig = {
    apiKey: "AIzaSyAJLoyVDM2wON_fcWNaWWDZze9mli8J_Wc",
  authDomain: "push-notification-3832e.firebaseapp.com",
  projectId: "push-notification-3832e",
  storageBucket: "push-notification-3832e.appspot.com",
  messagingSenderId: "513653890002",
  appId: "1:513653890002:web:8b45a0c6f3afab4e43060b",
  measurementId: "G-070DS6E6B5"
  };


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});