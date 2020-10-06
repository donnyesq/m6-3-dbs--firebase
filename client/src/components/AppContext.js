import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAqGfJuK_7V797gwLf1Emd9K-BzKYr6XaI",
  authDomain: "user-app-44e10.firebaseapp.com",
  databaseURL: "https://user-app-44e10.firebaseio.com",
  projectId: "user-app-44e10",
  storageBucket: "user-app-44e10.appspot.com",
  messagingSenderId: "24161197699",
  appId: "1:24161197699:web:be60090867e10b9a5985b6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export const AppContext = createContext(null);

const AppProvider = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = React.useState({});
  const [message, setMessage] = useState("");

  const handleSignOut = () => {
    signOut();
    setAppUser({});
  };

  React.useEffect(() => {
    if (user) {
      fetch(`/users`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setAppUser(json.data);
          setMessage(json.message);
        });
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{ appUser, signInWithGoogle, handleSignOut, message }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(AppProvider);
