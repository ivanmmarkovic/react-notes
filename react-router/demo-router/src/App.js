import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {

  const [logged, setLogged] = useState(false); 

  return (

    <Router>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/test">Test</Link>
        <Link to="/redirect">Redirect</Link>
        <Link to="/private">Private</Link>
      </nav>

      <button onClick={() => setLogged(!logged)}>Login</button>

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/about/*" element={<About />} />

        <Route path="/test" element={ <p>This is a text</p> } />

        <Route path="/redirect" element={<Navigate to="/about" />} />

        <Route path="/private" element={logged ? <Profile /> : <p>Click to login</p>} />
      </Routes>

    </Router>
  
  );
}

export default App;
