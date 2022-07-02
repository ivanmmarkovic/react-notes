
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import axios from 'axios';
import Button from './Button';

const MyComponent = () => {

    const btnRef = useRef(null);

    const handleClick = () => { btnRef.current.toggleVisibility() };

    return <div>
        <h1>MyComponent</h1>
        <button onClick={handleClick}>Parent button</button>
        <Button ref={btnRef} />
    </div>

};


export default MyComponent;