import React, { useContext } from 'react'
// import { Store } from '../Store';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function AdminRoute({children}) {
    const user = useSelector((state) => state.authSlice.user);
    return user && user.isAdmin ? children : <Navigate to="/signin" />;
}