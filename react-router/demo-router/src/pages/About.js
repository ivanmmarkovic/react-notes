import { Route, Routes, useNavigate } from "react-router-dom";
import Message from "../components/Message";


const About = () => {

    const navigate = useNavigate();

    return <div>
        <h1>About</h1>
        <button onClick={() => navigate("/")}>Home</button>

        <Routes>
            <Route path="element" element={<Message />} />
        </Routes>
    </div> 

};

export default About;