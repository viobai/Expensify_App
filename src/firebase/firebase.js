import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:269846688776:web:a7cfc2e979af1360168dbd",
    measurementId: "G-ZFSE7M78KG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

//// child_remove
//database.ref('expenses').on('child_remove', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});

//// child_changes
//database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});

//// child_added
//database.ref('expenses').on('child_added', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});

//// on each value change take a snap shot
//database.ref('expenses').on('value', (snapshot) => {
//    const expenses = [];

//    snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val()
//        });
//    });
//});

//database.ref('expenses').push({
//    description: 'Rent',
//    note: '',
//    amount: 109500,
//    createdAt: 97612349873
//})

//database.ref('expenses').push({
//    description: 'Phone Bill',
//    note: '',
//    amount: 5900,
//    createdAt: 97612349873
//})

//database.ref('expenses').push({
//    description: 'Food',
//    note: '',
//    amount: 1200,
//    createdAt: 97612349873
//})