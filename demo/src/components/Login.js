import { useContext, useRef } from "react";
import MyContext from "../context/MyContext";


const Login = () => {

    const {setIsLogged, setUsername} = useContext(MyContext);
    const iRef = useRef(null);

    const handleClick = () => {
        setIsLogged(true);
        setUsername(iRef.current.value);
    }

    return <div>
        <input type="text" ref={iRef} />
        <button onClick={handleClick}>Login</button>
    </div>
};

export default Login;