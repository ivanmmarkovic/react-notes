import { useState, useRef } from "react";

function MyComponent(){

    const [message, setMessage] = useState('');
    const inputRef = useRef(null);

    const handleClick = () => {
        setMessage(inputRef.current.value);
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return <div>
        <h1>MyComponent</h1>
        <p>Message : {message}</p>

        <input type="text" ref={inputRef} /> 
        <button onClick={handleClick}>Set message</button>
    </div>

}

export default MyComponent;