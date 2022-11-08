import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const googleprovider = new GoogleAuthProvider();

    //  Create user

    const createUser = (email, password) => {
        setLoading(true);
          
          return createUserWithEmailAndPassword(auth, email, password)
        }  

        // googel login

        const signGoogle = ()=>{
            setLoading(true);
            return signInWithPopup(auth,googleprovider)
        }

        // login
        const signin = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
          }

          //logout

          const logOut = ()=>{
            localStorage.removeItem('token');
             return signOut(auth)
          }

          useEffect(() => {
            //this part will execute once the component is mounted.
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
              setUser(currentUser)
              setLoading(false)
             
            })
        
            return () => {
              //this part will execute once the component is unmounted.
              unsubscribe()
            }
          }, [])


    const authInfo={user,createUser,signGoogle,signin,logOut}

    return (
        <div>
           <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;