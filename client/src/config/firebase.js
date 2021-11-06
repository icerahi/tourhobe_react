import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9WVLJ92iUMBhKTil35JYzatS6s2cHLjY",
  authDomain: "trip-hobe.firebaseapp.com",
  projectId: "trip-hobe",
  storageBucket: "trip-hobe.appspot.com",
  messagingSenderId: "258429596254",
  appId: "1:258429596254:web:43467e0d48c5463f977acf",
};

// Initialize Firebase
export const initalizeAuth = () => initializeApp(firebaseConfig);
