
import {BrowserRouter, Link, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>React router app</h1>

      <Routes>
        {/* <Route path='/' element={} />
        <Route path="/about" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
