import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

function MoreInfo() {
    const {products} = useGlobalContext()
    const {id} = useParams()
    const singleProd = products.find((item)=>item.id === id)
    return (
       <>
            <img src={singleProd.img} alt="" />
            <h2>
                {singleProd.name}
            </h2>
            <h3>
                {singleProd.price}$
            </h3>
        </>          
    );
}

export default MoreInfo;