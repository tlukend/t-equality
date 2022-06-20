import { initializeApp } from 'firebase/app';
import{
    getFirestore, collection, getDocs
}from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKcwhTd7yqGzScmFvCc3ArkDLRM1s6PbQ",
    authDomain: "t-equality.firebaseapp.com",
    databaseURL: "https://t-equality-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "t-equality",
    storageBucket: "t-equality.appspot.com",
    messagingSenderId: "337413190747",
    appId: "1:337413190747:web:5ebcf8c2a0f7268c9dbb7e",
    measurementId: "G-94684ZMK09"
};
//initialize firebase app
initializeApp(firebaseConfig);

//init services
const database = getFirestore();

//collection reference
const colRef = collection(database, 'accounts');

//get collection data
 getDocs(colRef)
    .then((snapshot) =>{
        let accounts = [];
        snapshot.docs.forEach((doc) => {
            accounts.push({...doc.data(), id: doc.id})
        })
        console.log(accounts);
    }).catch(err => {
        console.log(err.message)
 })

/*
const loginController= require('./src/api/controllers/login-controller');
const firebase = require('firebase');
const firebaseUi = require('firebaseui');




// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    //...
};

const app = initializeApp(firebaseConfig);*/