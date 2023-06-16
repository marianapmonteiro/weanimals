import React, { createContext, useState } from "react";
import api from '../utils/api'
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const acess_token = new Cookies();
    const [user, setUser] = useState({})

    const loginRequest = async (email, password, setHelpText, setError) => {
        let data = {
            email: email,
            password: password,
        }
        await api
            .post(`/auth/login`, data)
            .then((res) => {
                if (res.data.message) {
                    navigate("/");
                    acess_token.set("WeAnimals", res.data.token, {
                        path: "/",
                    })
                    setUser(res.data.data)
                    return { message: res.data.message, token: res.data.token, data: res.data.data };
                } if (res.data.error) {
                    setHelpText(true);
                    setError(res.data.error)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const logoutRequest = () => {
        acess_token.remove("WeAnimals", { path: "/" });
        console.log(acess_token);
        setUser("");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ loginRequest, logoutRequest, acess_token, user }}>
            {children}
        </AuthContext.Provider>
    );
};
