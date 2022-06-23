import { useState, useCallback } from "react";
import Child from './Child';

const MyComponent = () => {
    
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState('DATA');

    const returnComment = useCallback(() => {
        return data;
    }, [data]);

    return <div>
        <h1>MyComponent</h1>
        <Child returnComment={returnComment} />
        <button onClick={() => setVisible(!visible)}>Click</button>
        {visible && <p>This is a text</p>}
    </div>
    
};

export default MyComponent;