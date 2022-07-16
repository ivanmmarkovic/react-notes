import { useContext } from "react";
import MyContext from "../context/MyContext";


const Profile = () => {

    const {username} = useContext(MyContext);
    
    return <h1>{ username }</h1>

};

export default Profile;