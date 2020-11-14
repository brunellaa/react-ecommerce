import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1dKIwFiymk26dLJNwNxGX8FSP8ZQQD58",
  authDomain: "react-store-db-7120b.firebaseapp.com",
  databaseURL: "https://react-store-db-7120b.firebaseio.com",
  projectId: "react-store-db-7120b",
  storageBucket: "react-store-db-7120b.appspot.com",
  messagingSenderId: "666410013113",
  appId: "1:666410013113:web:45e38ac85ea80ab1802668",
  measurementId: "G-0XM2EZYWT9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user:" + error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
