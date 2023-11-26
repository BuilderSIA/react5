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
                <li>
                    <Link to={'login'} >
                    {!user.name ? <button onClick={()=> setLogin(!login)}>
                        {user.name ? user.name : 'Sign in'}
                     </button> : <button> {user.name}</button>}
                    </Link>
                </li>
                
            </ul>
        </div>
    );
}

export default Navbar;