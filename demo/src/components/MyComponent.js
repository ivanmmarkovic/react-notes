import React, {useEffect, useLayoutEffect, useRef} from "react";

const MyComponent = () => {

    const inputRef = useRef();
    /*

    useLayoutEffect is called before the stuff is printed to the user

    useEffect is called after everything is rendered

    */
    
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