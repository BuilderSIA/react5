import { useGlobalContext } from "../context";
import Card from "./Card";


function Cards() {
    const {cart,clearCart} = useGlobalContext();    
    return (
        <div>
            {cart.map((item)=> <Card key={item.id} {...item}/>)}
            <button onClick={()=> clearCart()}>Clear</button>
        </div>
    );
}

export default Cards;