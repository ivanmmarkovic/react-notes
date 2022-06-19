import { useReducer, useState } from "react";


const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {counter: state.counter + 1, visible: state.visible};
        case 'TOGGLE_VISIBILITY':
            return {visible: !state.visible, counter: state.counter};
        default:
            return state;
    }
};

function MyComponent(){

    const [state, dispatch] = useReducer(reducer, {counter: 0, visible: true});


    const handleIncrement = () => {
        dispatch({type: 'INCREMENT'});
    };
    const handleVisibility = () => {
        dispatch({type: 'TOGGLE_VISIBILITY'});
    };

    return <div>
        <h1>MyComponent</h1>

        <p>Count is { state.counter } </p>
        <button onClick={handleIncrement}>Increment</button>

        <br /><br />

        <button onClick={handleVisibility}>Handle visibility</button>
        { state.visible && <p>Visible</p>}
    </div>

}

export default MyComponent;