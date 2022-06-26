```

npm install react-router-dom

```

# All routes must be inside Routes. For example

```

<Routes>
    <Route path="/" element={ <Home />} />
</Routes>

```

# Navigation/redirects and useNavigate

### Navigation

```
import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom';

<Route path='/redirect' element={<Navigate to="/about" />} />
<Route path="/checkout" element={ cartIsEmpty ? <Navigate to="/products" /> : <p>Checkout</p>} />

```


### useNavigate

```
import { useNavigate } from "react-router-dom";

export function About(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return <div>
        <h1>About</h1>
        <button onClick={handleClick}>Go to products</button>
    </div>
};

```
# Nested routes


About is on */about* path.
Nested component Offer is on relative path to About component.
Offer is, in this example on */about/offer*

```
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

```

In App.js, add * after */about* to cover nested routes.

```

<Route path='/about/*' element={<About />} />

```



