import {
  getFirestore,
  getDoc,
  setDoc,
  // updateDoc,
  doc,
} from "@firebase/firestore/lite";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  updateProfile,
  // sendSignInLinkToEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0TH2NFc5tKGQFRn2PnWgSq5Jc4t2A5Mo",
  authDomain: "dietplan-f925d.firebaseapp.com",
  databaseURL:
    "https://dietplan-f925d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dietplan-f925d",
  storageBucket: "dietplan-f925d.appspot.com",
  messagingSenderId: "282749593627",
  appId: "1:282749593627:web:407956015a1629ed5bf0be",
  measurementId: "G-BB01JXZX9N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const firestore = getFirestore(app);

const auth = getAuth(app);
// const email = "samarsheikh001@gmail.com";
// const actionCodeSettings = {
//   url: "http://localhost:8080",
//   handleCodeInApp: true,
//   // dynamicLinkDomain: "example.page.link",
// };
// sendSignInLinkToEmail(auth, email, actionCodeSettings)
//   .then(() => {
//     window.localStorage.setItem("emailForSignIn", email);
//   })
//   .catch((error) => {
//     // const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });

// const test = async () => {
//   const docRef = doc(firestore, "users", "dasda@gmail.com");
//   //   const docSnap = await getDoc(docRef);
//   // await setDoc(docRef, "field", "valueaaa");
//   await setDoc(docRef, {
//     name: "sadasd",
//   });
// };
// test();

function setUserData(data) {
  const docRef = doc(firestore, "users", data.email);
  setDoc(docRef, data);
}

async function getUserData({ email }) {
  const docRef = doc(firestore, "users", email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    throw Error('No such documents')
  }
}
// const setUserEmailWithData = async ({ email, data }) => {
//   await setDoc(doc(firestore, "users", email), data);
// };

// setUserEmailWithData({
//   email: "samarsheikh001@gmail.com",
//   data: {
//     name: "samar",
//     paid: false,
//   },
// });

// authentication

const createAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      title: "Succeed",
      message: `Registration succeed as ${userCredential.user.email}`,
    };
  } catch (error) {
    console.log(Object.keys(error));
    return { message: error.code, title: "Failed to Register" };
  }
};

const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return {
      status: 200,
      user,
    };
  } catch (error) {
    return {
      status: 400,
      error: error.message,
    };
  }
};

const signOutUser = async () => {
  await signOut(auth);
};

export {
  createAccount,
  auth,
  getAuth,
  signOutUser,
  signInUser,
  onAuthStateChanged,
  setUserData,
  updateProfile,
  getUserData
};
setTimeout(() => {
  console.log(auth.currentUser.displayName);
}, 2000);
