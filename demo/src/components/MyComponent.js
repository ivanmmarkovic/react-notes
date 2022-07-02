
import {useState} from 'react';

const MyComponent = () => {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    const handleIncrement = () => { setCount(count + 1) };
    const handleDecrement = () => { setCount(count - 1) };
    const handleInputChange = (e) => { setMessage(e.target.value) };

    return <div>
        <h1>MyComponent</h1>
        <p>Count is {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <br /><br />
        <input type="text" onChange={handleInputChange} value={message} />
        <br />
        {message}
    </div>
};


export default MyComponent;