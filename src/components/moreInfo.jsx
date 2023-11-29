import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

function MoreInfo() {
    const {products} = useGlobalContext()
    const {id} = useParams()
    const singleProd = products.find((item)=>item.id === id)
    return (
       <>
            <img src={singleProd.img} alt="" />
            <h2 className="prodName">
                {singleProd.name}
            </h2>
            <div className="item-con">
            <h3 className="prodPrice">
                {singleProd.price}$
            </h3>
            <a href={singleProd.id}>
                more
            </a>
            </div> 
        </>          
    );
}

export default MoreInfo;