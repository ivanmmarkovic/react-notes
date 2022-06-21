import {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import axios from 'axios';


const MyComponent = () => {

    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setData(response.data);
            });
    }, []);

    const handleClick = () => {
        setVisible(!visible);
    };

    const findLongestUsername = (comments) => {
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
    };

    const longestName = useMemo(() => findLongestUsername(data), [data]);
    return <div>

        <p>{longestName}</p>
        
        <button onClick={handleClick}>Click</button>

    </div>

};

export default MyComponent;