import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAYERkcl18zIg4vzH1wF-M6bVp9myq71Tk",
    authDomain: "mitrak-7.firebaseapp.com",
    projectId: "mitrak-7",
    storageBucket: "mitrak-7.appspot.com",
    messagingSenderId: "970631936656",
    appId: "1:970631936656:web:5e1556e4dd0764327ab615"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function signIn() {
    try {
        const result = await signInWithPopup(auth, provider)
        const user = result.user;
        console.log(result, user);
    } catch (error) {
        console.log(error)
    }
}
