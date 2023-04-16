import { Navigate } from 'react-router-dom';
import { UserAuth } from '../components/Auth/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth();
    
    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;