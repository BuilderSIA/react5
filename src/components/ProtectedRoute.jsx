
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

function ProtectedRoute({children}) {
    const {user} = useGlobalContext();
    const navigate = useNavigate();
    if(!user.name){
        return navigate('*');
    }else{
        return children;
    }
    
}

export default ProtectedRoute;