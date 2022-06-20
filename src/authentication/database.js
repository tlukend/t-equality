const { initializeApp } = require('@firebase/app');
const{getFirestore, collection, getDocs, query, where} = require('firebase/firestore');

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

 class Database {

     static getInstance(){
         if(!Database.instance){
             Database.instance = new Database();
         }
         return Database.instance;
     }
     constructor(){
         this._app = initializeApp(firebaseConfig);
         this._db = getFirestore(this._app);
         this._accounts = collection(this._db, 'accounts');
     }
     async checkLogin(email, password){
         const q = query(this._accounts, where('email', '==', email));
         let result = await getDocs(q);
         console.log(result);
     }

 }

 module.exports = Database;