import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";


const LoginForm = () => {

    const {setUsername, setIsLoggedIn} = useContext(LoginContext);

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const handleClick = () => {
        setIsLoggedIn(true);
    }
    return <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Submit</button> 
    </div>
};

export default LoginForm;