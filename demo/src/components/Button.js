import { useEffect } from "react";

const Button = ({f}) => {

    useEffect(() => {
        console.log('Function was rerendered!');
    }, [f]);

    return <div>
        <button>Toggle visibility</button>
        
    </div>

};

export default Button;