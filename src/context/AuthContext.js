import React, { createContext } from "react";
import api from '../utils/api'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['WeAnimals', 'UserData']);

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
                    setCookie('WeAnimals', res.data.token, { path: '/' });
                    setCookie('UserData', res.data.data, { path: '/' });
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
        removeCookie('WeAnimals');
        removeCookie('UserData');
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ loginRequest, logoutRequest, cookies, setCookie }}>
            {children}
        </AuthContext.Provider>
    );
};
