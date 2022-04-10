// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCj_ToPeW3DKCQ_Ej1-i5Q66sOog_7ndCo",
    authDomain: "ema-jhon-2e312.firebaseapp.com",
    projectId: "ema-jhon-2e312",
    storageBucket: "ema-jhon-2e312.appspot.com",
    messagingSenderId: "824435526517",
    appId: "1:824435526517:web:3b795ce750ae900a73213c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;