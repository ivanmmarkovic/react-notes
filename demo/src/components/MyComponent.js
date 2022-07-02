
import {useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useMemo } from 'react';

const MyComponent = () => {

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(null);

    const handleClick = () => { setVisible(!visible) };

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setData(response.data);
            });
    }, []);

    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = '';
        for(let i = 0; i < comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log('THIS WAS COMPUTED');
        return longestName;
    }

    const longestName = useMemo(() => findLongestName(data), [data]);

    return <div>
        <h1>MyComponent</h1>
        <p>Longest name : { longestName }</p>
        <button onClick={handleClick}>Parent button</button>
        { visible && <p>This is a text</p> }
    </div>

};


export default MyComponent;