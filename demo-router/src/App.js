
import { useState } from 'react';
import {BrowserRouter, Link, Routes, Route, Navigate} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Private from './pages/Private';


function App() {


  const [logged, setLogged] = useState(false);

  const handleClick = () => {
    setLogged(!logged);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/private">Private</Link>
        <Link to="/test">Test</Link>
        <Link to="/redirect">Redirect</Link>
        <Link to="/check">Check status</Link>
      </nav>
      <h1 style={{"color": "crimson"}}>React router app</h1>
      <button onClick={handleClick}>Change status</button>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/test" element={(
          <div>
            <h1>Test element</h1>
            <p>This is some text</p>
          </div>
        )} />

        <Route path="/redirect" element={ <Navigate to={"/about"} /> } />
        <Route path="/private" element={ logged ? <Private /> : <p>Click on button to change status</p>} />
        <Route path="/check" element={logged ? <Navigate to={"/private"} /> : <p>Click on button to change status</p>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
