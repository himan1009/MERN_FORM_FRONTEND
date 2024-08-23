import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function RefrshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true);
            if (location.pathname === 'https://mern-form-backend-62bo.onrender.com/auth/' ||
                location.pathname === 'https://mern-form-backend-62bo.onrender.com/auth/login' ||
                location.pathname === 'https://mern-form-backend-62bo.onrender.com/auth/signup'
            ) {
                navigate('/home', { replace: false });
            }
        }
    }, [location, navigate, setIsAuthenticated])

    return (
        null
    )
}

export default RefrshHandler