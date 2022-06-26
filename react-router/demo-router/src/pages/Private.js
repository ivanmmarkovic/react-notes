import { useNavigate } from "react-router-dom";


const Private = () => {

    const navigator = useNavigate();

    const handleClick = () => {
        navigator("/about");
    };

    return <div>
        <h1>Private page</h1>

        <button onClick={handleClick}>Go to about page</button>
    </div>
};

export default Private;