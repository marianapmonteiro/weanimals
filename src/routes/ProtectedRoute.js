import React from 'react'
import { AuthContext } from "../context/AuthContext"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { Cookies } from 'react-cookie';



const ProtectedRoute = ({ children }) => {
    const acess_token = new Cookies();
    let location = useLocation();
    const navigate = useNavigate()

    if (!acess_token.get('WeAnimals')) {
        console.log('nao tem user!')
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (acess_token.get('WeAnimals')) {
        console.log('tem user')
        return children
    }
};

export default ProtectedRoute;