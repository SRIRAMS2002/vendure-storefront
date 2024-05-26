import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyAJLoyVDM2wON_fcWNaWWDZze9mli8J_Wc",
    authDomain: "push-notification-3832e.firebaseapp.com",
    projectId: "push-notification-3832e",
    storageBucket: "push-notification-3832e.appspot.com",
    messagingSenderId: "513653890002",
    appId: "1:513653890002:web:8b45a0c6f3afab4e43060b",
    measurementId: "G-070DS6E6B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);





export const requestPermission = () => {
    console.log("Requesting User Permission......");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification User Permission Granted.");
  
        return getToken(messaging, { vapidKey: `BDZp1eWvzdwj7tLr9JuzmRZ5ytdCR1bCovBLZSoyFD7HobupqFU3ywCAUHCw7zFL1rhNQ1zbTKQyv5iIRj5EMQo` })
          .then((currentToken) => {
            if (currentToken) {
              console.log('Client Token: ', currentToken);
              
            } else {
              
              console.log('Failed to generate the app registration token.');
            }
          })
          .catch((err) => {
            console.log('An error occurred when requesting to receive the token.', err);
          });
      } else {
        console.log("User Permission Denied.");
      }
    });
  }

requestPermission();


export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});