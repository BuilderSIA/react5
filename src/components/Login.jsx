import { useGlobalContext } from "../context";


function Login(){
    const {login, setLogin, name, setName, handSignIn} = useGlobalContext()
    return (
        <div className="logCont">
            <form className="login"  onSubmit={handSignIn}>
                <button onClick={()=>setLogin(!login)} className="closeBtn">
                    x
                </button>
                <input type="text" className="logInput" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="password" className="logInput" />
                <button className="logBtn">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default Login;Login