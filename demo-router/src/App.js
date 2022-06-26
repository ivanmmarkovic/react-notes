
import {BrowserRouter, Link, Routes, Route, Navigate} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>React router app</h1>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/redirect" element={ <Navigate to={"/about"} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
