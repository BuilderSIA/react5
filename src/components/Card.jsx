import { useGlobalContext } from "../context";



function Card() {
    const {title,price,img,amount} = useGlobalContext();
    return (
        <div>
            <h2>{title}</h2>
            <button>Clear</button>
        </div>
    );
}

export default Card;