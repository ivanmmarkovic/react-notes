import { useState, useCallback } from "react";
import Child from './Child';

const MyComponent = () => {
    
    const [data, setData] = useState('This is a message ...');
    const [toggle, setToggle] = useState(false);

    const returnComment = useCallback((name) => {
        return data + ' ' + name;
    }, [data]);

    return <div>

        <Child returnComment={returnComment} />
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <br />
        { toggle && <h1>toggle</h1> }

    </div>
    
};

export default MyComponent;