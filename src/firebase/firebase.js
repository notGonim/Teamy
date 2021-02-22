import firebase from 'firebase';





const firebaseConfig = {
  apiKey: "AIzaSyCRQYcAnsU7Agm4m5J31rLVmKEnavSjXdQ",
  authDomain: "teamy-9b740.firebaseapp.com",
  projectId: "teamy-9b740",
  storageBucket: "teamy-9b740.appspot.com",
  messagingSenderId: "230234305361",
  appId: "1:230234305361:web:e25fbbf2f9b08770a41970"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db;
