
import { useParams } from 'react-router-dom';

function moreInfo() {
    const {id} = useParams()
    return (
        <div>
           <h2>Hello</h2>
        </div>
    );
}

export default moreInfo;