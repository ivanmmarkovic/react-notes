
import {useReducer} from 'react';


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

    const [state, dispatch] = useReducer(reducer, {count: 0, visible: false});

    const handleIncrement = () => { dispatch({type: 'INCREMENT'}) };
    const handleDecrement = () => { dispatch({type: 'DECREMENT'}) };
    const handleChangeVisibility = () => { dispatch({type: 'TOGGLE_VISIBILITY'}) }

    return <div>
        <h1>MyComponent</h1>
        <p>Count is {state.count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <br /><br />
        <button onClick={handleChangeVisibility}>Change visibility</button>
        {state.visible && <p>This is a text</p>}
    </div>
};


export default MyComponent;