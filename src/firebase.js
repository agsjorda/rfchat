import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCmCgVWSrjHunzmeI30o5gZ3bXEeE5sbYQ",
	authDomain: "rf-chat-3d041.firebaseapp.com",
	projectId: "rf-chat-3d041",
	storageBucket: "rf-chat-3d041.appspot.com",
	messagingSenderId: "170311534905",
	appId: "1:170311534905:web:b271c06d5d1783c811c0e8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
