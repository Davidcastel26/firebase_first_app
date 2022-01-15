import { initializeApp } from 'firebase/app'
//importing db so we need a func from fibestore part from the firebase libery
import {
        getFirestore,
        collection
        } from 'firebase/firestore'

interface fbConfigInterface {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
}

const firebaseConfig : fbConfigInterface = {
    apiKey: "AIzaSyDzh1AFlBV_Mc0wOHKhmk-yhYmoywrG_-A",
    authDomain: "fir-9-dojo-4f821.firebaseapp.com",
    projectId: "fir-9-dojo-4f821",
    storageBucket: "fir-9-dojo-4f821.appspot.com",
    messagingSenderId: "31769837180",
    appId: "1:31769837180:web:25205a91ae5235a877d3f9"
};

//init firebase app
initializeApp(firebaseConfig)

//init services
const db = getFirestore()

//colletino ref
// check the db since books is part of one collection(table) into the db
const colRef = collection(db, 'books')
//get collection data