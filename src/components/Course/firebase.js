import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAwgmmKNDe2oiEfy3tsesv2MTO-tfb79z4",
  authDomain: "scheduler-335c1.firebaseapp.com",
  databaseURL: "https://scheduler-335c1.firebaseio.com",
  projectId: "scheduler-335c1",
  storageBucket: "scheduler-335c1.appspot.com",
  messagingSenderId: "551126831375",  
  appId: "1:551126831375:web:b79205038064a23e11ee7a",
  measurementId: "G-RPK7C35F48"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export default db;