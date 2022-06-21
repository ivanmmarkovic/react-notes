import { forwardRef, useImperativeHandle, useState } from "react";



const Button = forwardRef((props, ref) => {

    const [visible, setVisibility] = useState(false);

    useImperativeHandle(ref, () => ({
        changeVisibility(){
            setVisibility(!visible);
        }
    }));

    return <div>
        <button>Child</button>
        { visible && <p>This is a text</p> }
    </div>
});

export default Button;