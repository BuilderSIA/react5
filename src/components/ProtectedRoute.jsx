
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({user, children}) {
    const navigate = useNavigate()
    if(!user){
        return navigate('/')
    }else{
        return children
    }
    
}

export default ProtectedRoute;