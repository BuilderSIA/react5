/* eslint-disable react/prop-types */




function Card({title,price,image,amountIn}) {
    return (
        <div>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h2>{price}</h2>
            <h2>{amountIn}</h2>
            <button>inc</button>
        </div>
    );
}

export default Card;