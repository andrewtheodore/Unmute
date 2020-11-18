import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyATxt-jGn0oH22QGvv_GaUg0XGQx9EnDB4",
    authDomain: "unmute-f90d3.firebaseapp.com",
    databaseURL: "https://unmute-f90d3.firebaseio.com",
    projectId: "unmute-f90d3",
    storageBucket: "unmute-f90d3.appspot.com",
    messagingSenderId: "139106920091",
    appId: "1:139106920091:web:db13837bfd2d6126d3883e",
    measurementId: "G-BM1ZHKX744"
  };
try {
  firebase.initializeApp(firebaseConfig)
  // firebase.analytics();
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack)
  }
}
const fire = firebase
export default fire
