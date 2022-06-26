import { Route, Routes } from "react-router-dom";
import MoreAbout from "../components/MoreAbout";


const About = () => {

    return <div>
            <h1>About</h1>
            <Routes>
                <Route path="more" element={ <MoreAbout /> } />
            </Routes>
        </div>

};

export default About;