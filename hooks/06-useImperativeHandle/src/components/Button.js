import { useImperativeHandle, useState, forwardRef } from "react";

const Button = forwardRef((props, ref) => {

    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        changeVisibility(){
            setVisible(!visible);
        }
    }));

    return <div>
        <button>Child button</button>
        {visible && <p>This is a text</p>}
    </div>

});

export default Button;