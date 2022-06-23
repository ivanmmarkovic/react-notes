import { useState, useCallback, useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const MyComponent = () => {
    
    const {username, isLoggedIn} = useContext(LoginContext);

    return <div>
        <h1>MyComponent</h1>
        {isLoggedIn && <p>{username}</p>}
    </div>
    
};

export default MyComponent;