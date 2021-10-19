import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCw7qV3djNsE0cRtcwSYvdDykeQ9saB6JI',
  authDomain: 'wireless-buzzer-7a44e.firebaseapp.com',
  projectId: 'wireless-buzzer-7a44e',
  storageBucket: 'wireless-buzzer-7a44e.appspot.com',
  messagingSenderId: '291185733404',
  appId: '1:291185733404:web:48e79e839a887a8a8814d9',
  databaseURL : 'https://console.firebase.google.com/u/0/project/wireless-buzzer-7a44e/database/wireless-buzzer-7a44e-default-rtdb/data', 
};


let app = firebase.initializeApp(firebaseConfig);
export default app.database();
