import { useEffect, useState } from "react";
import axios from 'axios';

function MyComponent(){

    const [counter, setCounter] = useState(0);
    const [email, setEmail] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setEmail(response.data[0].email);
                console.log('API WAS CALLED');
            });
    }, []);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    return <div>
        <h1>MyComponent</h1>

        <p>Count is { counter } </p>
        <button onClick={handleIncrement}>Increment</button>

        <br /><br />
        <p>Email is : {email}</p>
    </div>

}

export default MyComponent;