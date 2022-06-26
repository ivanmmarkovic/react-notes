import { Route, Routes, useNavigate } from "react-router-dom";
import { Offer } from "../components/Offer";

export function About(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return <div>
        <h1>About</h1>
        <button onClick={handleClick}>Go to products</button>

        <Routes>
            <Route path="offer" element={<Offer />} />
        </Routes>
    </div>
};

