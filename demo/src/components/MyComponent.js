

import { useCallback, useState } from 'react';
import Button from './Button';

const MyComponent = () => {

    const [data, setData] = useState('ivan');
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    }

    const f = useCallback(() => {
        return data;
    }, [data]);

    return <div>
        <h1>MyComponent</h1>
        <button onClick={ handleClick }>Parent button</button>
        <Button f={f} />
        { visible && <p>This is a text</p> }
    </div>

};


export default MyComponent;