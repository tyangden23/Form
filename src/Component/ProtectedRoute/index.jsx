import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/Login" replace />
    }
    return children  
}
