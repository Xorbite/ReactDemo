import logo from './logo.svg';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from './components/Create'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
          <Routes>
            <Route path="/*" element= {
              <Home />
              } />
            <Route path="/tools" element= {
              <h1>Tools</h1>
            } />
            <Route path="/about" element= {
              <h1>About</h1>
            } />
            <Route path="/contact" element= {
              <h1>Contact</h1>
            } />
            <Route path="/create" element= {
              <Create />
            } />
            </Routes>
          </div>
        </div>
    </Router>
  );

}

export default App;
