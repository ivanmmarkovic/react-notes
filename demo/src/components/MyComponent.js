import {useRef} from "react";

import Button from "./Button";


const MyComponent = () => {

    const btnRef = useRef(null);

    const handleClick = () => {
        btnRef.current.changeVisibility();
    };

    return <div>

        <button onClick={handleClick}>Parent</button>
        <Button ref={btnRef} />

    </div>

};

export default MyComponent;