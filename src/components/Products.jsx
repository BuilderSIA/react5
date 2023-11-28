
function Products({editProd,pname,setPname,price,setPrice,products,deleteProd,addProduct}) {
    return (
        <div className="prodCont">
            <form className="prodSide" onSubmit={addProduct}>
                <input type="text" className="forP" value={pname} onChange={(e)=>setPname(e.target.value)} placeholder="Enter name" />
                <input type="text" className="forP" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price"/>
                <button className="addBtn">
                    Add product
                </button>
                
            </form>
            <ul className="prodList">
                {products.map((data)=>{
                    return <li className='items' key={data.id} >
                        <img src={data.img} alt="" />
                        <h2 className="prodName">
                            {data.name}
                        </h2>
                        <div className="item-con">
                        <h3 className="prodPrice">
                            {data.price}$
                        </h3>
                        <a href={data.id}>
                            more
                        </a>
                        </div>
                        <div className="btns">
                            <button onClick={()=>deleteProd(data.id)} >
                                delete
                            </button>
                            <button onClick={()=>editProd(data.id)}>
                                Edit
                            </button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Products;