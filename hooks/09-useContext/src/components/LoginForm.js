import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"


export function LoginForm(){

    const {setUsername, setShowProfile} = useContext(LoginContext);

    const handleClick = (e) => {
        setShowProfile(true);
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    return <div>
        <input type="text" onChange={handleChange}/><br />
        <input type="password" /><br />
        <button onClick={handleClick}>Login</button>
    </div>
}