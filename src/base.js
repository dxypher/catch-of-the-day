import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey     : "AIzaSyBxPlaPMWOadDupLrZ54oKW29-A74W6CzM",
  authDomain : "catch-of-the-day-nh.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nh.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp }

export default base;