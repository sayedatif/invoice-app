import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBz_pjH6_S_foGQ-A6jdZ39CdWE0Tf-1VE",
  authDomain: "invoice-app-dc7ad.firebaseapp.com",
  databaseURL: "https://invoice-app-dc7ad.firebaseio.com",
  projectId: "invoice-app-dc7ad",
  storageBucket: "invoice-app-dc7ad.appspot.com",
  messagingSenderId: "644024890528"
};
firebase.initializeApp(config);

export default firebase;
