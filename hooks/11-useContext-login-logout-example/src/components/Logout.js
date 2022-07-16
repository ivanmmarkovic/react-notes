import { useContext } from "react";
import MyContext from "../context/MyContext";


const Logout = () => {

    const {setUsername, setLogged} = useContext(MyContext);

    const handleClick = () => {
        setUsername('');
        setLogged(false);
    };

    return <button onClick={handleClick}>Logout</button>
};

export default Logout;