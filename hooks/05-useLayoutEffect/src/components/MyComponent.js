import React, {useEffect, useLayoutEffect, useRef} from "react";

const MyComponent = () => {

    const inputRef = useRef();
    
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = 'Mario';
    }, []);

    return (<div>
        <input type="text" value="John" ref={inputRef} />
    </div>);
};

export default MyComponent;