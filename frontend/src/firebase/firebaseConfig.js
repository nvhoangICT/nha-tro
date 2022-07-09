import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyCeuGIELpTBeedeoFP5ySHfoHp2jJ-IH9k",
    authDomain: "nha-tro-b7165.firebaseapp.com",
    databaseURL: "https://nha-tro-b7165-default-rtdb.firebaseio.com",
    projectId: "nha-tro-b7165",
    storageBucket: "nha-tro-b7165.appspot.com",
    messagingSenderId: "644609606639",
    appId: "1:644609606639:web:dc53df3095a6b77236ac1a",
    measurementId: "G-C6JJMX7WZW"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;