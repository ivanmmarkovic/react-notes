import { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import Login from "./Login";
import Profile from "./Profile";

const MyComponent = () => {

    const [username, setUsername] = useState('');
    const [logged, setLogged] = useState(false);

    return (
        <MyContext.Provider value={{username, setUsername, logged, setLogged}}>
            { !logged && <Login /> }
            { logged && <Profile /> }
        </MyContext.Provider>
        
    )

};

export default MyComponent;