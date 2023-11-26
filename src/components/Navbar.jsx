import { Link } from "react-router-dom";


function Navbar({login , setLogin, name,user}) {


    return (
        <div className="navbar">
            <ul className="navlist">
                <li>
                    <Link to='/' >
                    Home
                    </Link>
                </li>
                <li>
                    <Link to='products' >
                    Products
                    </Link>
                </li>
                <div className="navBTN" >
                    <Link to={'login'} >
                    {!user.name ? <button onClick={()=> setLogin(!login)}>
                        Sign in
                     </button> : <button> {user.name}</button>}
                    </Link>
                </div>
                
            </ul>
        </div>
    );
}

export default Navbar;