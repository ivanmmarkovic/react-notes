import { useState } from "react";
import { Link } from "react-router-dom";

let p = [
    {id: 1, title: "Title 1"},
    {id: 2, title: "Title 2"},
    {id: 3, title: "Title 3"}
];

export function Products(){
    const [products] = useState(p); 
    return <div>
        <h1>Products</h1>
        {
            products.map(product => (<div key={product.id}>
                <Link to={`/products/${product.id}`}>
                    {product.title}
                </Link>
            </div>))
        }
    </div>
};

