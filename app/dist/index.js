"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
//importing db so we need a func from fibestore part from the firebase libery
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyDzh1AFlBV_Mc0wOHKhmk-yhYmoywrG_-A",
    authDomain: "fir-9-dojo-4f821.firebaseapp.com",
    projectId: "fir-9-dojo-4f821",
    storageBucket: "fir-9-dojo-4f821.appspot.com",
    messagingSenderId: "31769837180",
    appId: "1:31769837180:web:25205a91ae5235a877d3f9"
};
//init firebase app
(0, app_1.initializeApp)(firebaseConfig);
//init services
const db = (0, firestore_1.getFirestore)();
//colletino ref
//get collection data
