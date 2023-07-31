import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from "../components/loginForm";



const Login = () => {
    const auth = getAuth();
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn) {
            console.log('logedIn', isLoggedIn);
            auth.onAuthStateChanged((user) => {
                if (user) {
                    setLoggedIn(true);
                    console.log("Пользователь вошел");
                } else {
                    localStorage.removeItem("isLoggedIn");
                    console.log("Пользователь не вошел");
                }
            });
        }
    }, [auth]);

    const handleLogin = (email, password, setError) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setLoggedIn(true);
                localStorage.setItem("isLoggedIn", true);
            })
            .catch((error) => {
                setError(error.code);
            });
    };

    if (loggedIn) {
        navigate('/profile');
        return null;
    }

    return (
        <div>
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
};

export default Login;
