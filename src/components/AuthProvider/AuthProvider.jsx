import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext=createContext(null)
const googleProvider=new GoogleAuthProvider()
const githubProvider=new GithubAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const githubSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
           
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const userInfo={
        user,
        setUser,
        createUser,
        loading,
        setLoading,
        signIn,
        googleSignIn,
        githubSignIn,
        logout
    }

    return (
            <AuthContext.Provider value={userInfo}>
               {children}
            </AuthContext.Provider>
         
    );
};

export default AuthProvider;