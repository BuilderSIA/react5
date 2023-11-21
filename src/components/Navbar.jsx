

function Navbar({login , setLogin, name,user}) {
    return (
        <div className="navbar">
            <ul className="navlist">
                <li>
                    <a href="">
                        Home
                    </a>
                </li>
                <li>
                    <a href="">
                        Categories
                    </a>
                </li>
                <li>
                    <a href="">
                        About us
                    </a>
                </li>
                <li>
                    {!user.name ?
                     <button onClick={()=> setLogin(!login)}>
                        {user.name ? user.name : 'Sign in'}
                     </button> : <button> {user.name}</button>}
                </li>
                
            </ul>
        </div>
    );
}

export default Navbar;