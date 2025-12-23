import { Navigate, Outlet } from "react-router"

export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to='/login' replace/>
    }

    return children || <Outlet/>
}

export const GuestRoute = ({ children }) => {
    const token = localStorage.getItem('token')

    if (token) {
        return <Navigate to='/' replace/>
    }

    return children || <Outlet/>
}