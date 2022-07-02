import { useState } from "react";
import MyContext from "../context/MyContext";
import DisplayName from "./DisplayName";
import Login from "./Login";


const MyComponent = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState('');

    return (
        <MyContext.Provider value={{username, setIsLogged, setUsername}}>
            <Login />
            <DisplayName />
        </MyContext.Provider>
    )
};

export default MyComponent;