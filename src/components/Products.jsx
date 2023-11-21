
function Products({pname,setPname,price,setPrice,handEditId,allProd,setAllprod,deleteProd,handProd,id,setId,getId}) {
    return (
        <div className="prodCont">
            <div className="prodSide">
                <input type="text" className="forId" value={id} onChange={(e)=>setId(e.target.value)} />
                <input type="text" className="forPname" value={pname} onChange={(e)=>setPname(e.target.value)} />
                <input type="text" className="forPrice" value={price} onChange={(e)=>setPrice(e.target.value)} />
                <button onClick={()=>handProd()}>
                    Add product
                </button>
                
            </div>
            <ul className="prodList">
                {allProd.map((data)=>{
                    return <div className={data.id} key={data.id}>
                        <h2>
                            {data.name}
                        </h2>
                        <h3>
                            {data.price}
                        </h3>
                        <button onClick={()=>deleteProd(data.id)} >
                            delete
                        </button>
                        <button onClick={()=>handEditId(data.id)}>
                            Edit
                        </button>
                    </div>
                })}
            </ul>
        </div>
    );
}

export default Products;