/* eslint-disable prettier/prettier */
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDBpwj0sm4hcRAzrBYvRU3m8Jr18eKAZSs',
  authDomain: 'reactnativefirebase-00000.firebaseapp.com',
  databaseURL: 'https://reactnativefirebase-00000.firebaseio.com',
  projectId: 'reactnativetask1',
  storageBucket: 'reactnativefirebase-00000.appspot.com',
  messagingSenderId: '000000000000000',
  appId: '1:157424414728:android:5232eaed055c50cc34e1bd',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
