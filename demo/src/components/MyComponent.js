
import {useEffect, useLayoutEffect, useState} from 'react';
import axios from 'axios';


const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1, visible: state.visible}
        case 'DECREMENT':
            return {count: state.count - 1, visible: state.visible};
        case 'TOGGLE_VISIBILITY':
            return {count: state.count, visible: !state.visible}
        default:
            return state;
    }
};

const MyComponent = () => {

    const [count, setCount] = useState(0);
    const [email, setEmail] = useState('');
    
    useLayoutEffect(() => {
        setEmail('?');
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setEmail(response.data[0].email);
                console.log('API WAS CALLED');
            });
    }, []);

    const handleIncrement = () => { setCount(count - 1) };
    const handleDecrement = () => { setCount(count + 1)};
    

    return <div>
        <h1>MyComponent</h1>
        <p>Count is {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <p>Email is {email}</p>
    </div>
};


export default MyComponent;