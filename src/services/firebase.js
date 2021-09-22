import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDIZeJe_MC5d8bq5VvhSOaG8bzTipC9dnM",
    authDomain: "dojo-blog-6b410.firebaseapp.com",
    projectId: "dojo-blog-6b410",
    storageBucket: "dojo-blog-6b410.appspot.com",
    messagingSenderId: "831020584395",
    appId: "1:831020584395:web:9504a785b6f4ada4e17a4e",
    measurementId: "G-JKP29PNQX9"
  };

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()

export { firestore }