import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init'
import axios from 'axios';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            if (currentUser?.email){
              const userData= {email: currentUser.email} 
              axios.post('http://localhost:5000/jwt', userData)
              .then(res=>{
                console.log('Token after JWT' ,res.data)
                const token=res.data.token
                localStorage.setItem('token', token)
              }).catch(error=>{
                console.log(error)
              })
            }
                console.log('user in the auth state change', currentUser)
        })
        return () => {
               unSubscribe()
        }

    }, [])


    const userInfo = {
        createUser,
        signInUser,
        loading,
        signOutUser,
        user,
        setUser,
    }




    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;