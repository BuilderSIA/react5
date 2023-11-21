

function Login({login, setLogin, name, setName, psw, setPsw, handSignIn}){
    return (
        <div className="logCont">
            <div className="login">
                <button onClick={()=>setLogin(!login)} className="closeBtn">
                    x
                </button>
                <input type="text" className="logInput" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="password" className="logInput" />
                <button onClick={()=>handSignIn()} className="logBtn">
                    Sign in
                </button>
            </div>
        </div>
    );
}

export default Login;Login