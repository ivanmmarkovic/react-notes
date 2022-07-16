import { useContext, useRef } from "react";
import MyContext from "../context/MyContext";


const Login = () => {

    const {setUsername, setLogged} = useContext(MyContext);
    const i = useRef(null);

    const handleClick = () => {
        setUsername(i.current.value);
        setLogged(true);
    };

    return <div>

        <input type="text" ref={i} />
        <button onClick={handleClick}>Login</button>
    </div>

};

export default Login;