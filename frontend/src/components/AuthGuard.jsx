import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router"
import { getUser } from "../lib/user-api"

export const ProtectedRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        getUser()
        .then(() => setIsAuth(true))
        .catch(() => setIsAuth(false))
        .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) return <div className="flex justify-center items-center h-screen text-gray-500">Loading auth...</div>

    if (!isAuth) {
        return <Navigate to='/login' replace />
    }

    return children || <Outlet />
}

export const GuestRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        getUser()
            .then(() => setIsAuth(true))
            .catch(() => setIsAuth(false))
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) return null

    if (isAuth) {
        return <Navigate to='/' replace />
    }

    return children || <Outlet />
}