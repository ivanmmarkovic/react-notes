import {useState} from "react";

const MyComponent = () => {

    const [counter, setCounter] = useState(0);
    

    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    return <div>

        <h1>MyComponent</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <p>{counter}</p>

    </div>
};

export default MyComponent;