import React from 'react'
import { AuthContext } from "../context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"
import { Cookies } from 'react-cookie';



const ProtectedRoute = ({ children }) => {
    const acess_token = new Cookies();
    let location = useLocation();

    if (!acess_token.get('WeAnimals')) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (acess_token.get('WeAnimals')) {
        return children
    }
};

export default ProtectedRoute;