import { useState } from "react";


function MyComponent(){

    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    const handleDecrement = () => {
        setCounter(counter - 1);
    };
    const handleVisibility = () => {
        setVisible(!visible);
    };
    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    return <div>
        <h1>MyComponent</h1>
        <p>Count is { counter } </p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <div>
            <input type="text" onChange={handleInputChange} value={message} />
            <br />
            <p>Message is {message}</p>
        </div>
        <button onClick={handleVisibility}>Handle visibility</button>
        {visible && <p>Visible</p>}
    </div>

}

export default MyComponent;