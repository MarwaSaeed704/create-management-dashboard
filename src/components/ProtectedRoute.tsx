import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { Navigate } from "react-router";

const ProtectedRoute = ({children}:{children:React.ReactNode}) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

       
    
    return isAuthenticated ? <>{children}</> : <Navigate to='/login' replace />;
        
    
}

export default ProtectedRoute;