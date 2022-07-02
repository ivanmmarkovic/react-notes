import { useContext } from "react";
import MyContext from "../context/MyContext";



const DisplayName = () =>{

    const {username} = useContext(MyContext);

    return <div>
        <p>{username}</p>
    </div>
};

export default DisplayName;