import { Route, Routes, useParams } from "react-router-dom";
import { Offer } from "./Offer";


export function ProductDetail(props){
    const {id} = useParams();
    return <div>
        <h1>{id}</h1>

        <Routes>
            <Route path="offer" element={<Offer />} />
        </Routes>
    </div>
};

