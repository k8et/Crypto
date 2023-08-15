import React, {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import RegisterForm from "../components/registerForm";



const Register = () => {
    const auth = getAuth();
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn) {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    setLoggedIn(true);
                } else {
                    localStorage.removeItem("isLoggedIn");
                }
            });
        }
    }, [auth]);
    const handleRegister = (email, password, setError) => {
        createUserWithEmailAndPassword(auth, email, password)
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
    }

    return (
        <div>
            <RegisterForm onSubmit={handleRegister} />
        </div>
    );
};

export default Register;
