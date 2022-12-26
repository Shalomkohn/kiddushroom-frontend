import React from 'react'
import { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import {auth, provider } from '../firebase-configuration'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function LoginPage({ setIsAuth }){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    let navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((results) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate('/')
        })
    }
  return (
    <>
        <Nav />
        <h3>Login</h3>
        <p>Sign in with google to continue</p>
        <button style={{marginBottom: '400px'}} onClick={signInWithGoogle}>sign in</button>
    </>

  )
}

export default LoginPage