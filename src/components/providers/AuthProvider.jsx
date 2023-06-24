import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);
import app from "../../firebase/firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //1. Register users
  const userRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //2. send email verification message to the user vis email
  const verifyEmailAddress = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //3. Login users
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //4. Reset password of the users
  const changeUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //5. Users log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // GitHub sign in
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  //6. Set an observer to watch the user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      // Equivalent to unmount= stop observing
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    userRegistration,
    verifyEmailAddress,
    userLogIn,
    logOut,
    changeUserPassword,
    googleSignIn,
    gitHubSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
