import { forwardRef, useImperativeHandle, useState } from "react";


const Button = forwardRef((props, ref) => {

    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        toggleVisibility(){
            setVisible(!visible);
        }
    }));

    return <div>
        <button>Toggle visibility</button>
        { visible && <p>This is a text</p> }
    </div>

});

export default Button;