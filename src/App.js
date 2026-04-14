import React from 'react';
import Home from './Home.js';
import Module from './Module';
import Exams from './Exams';
import AboutUs from './AboutUs';
import  { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return(
    <>
     <div> 
        <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Module">Module</Link>
          <Link to="/Exams">Exams</Link>
          <Link to="/AboutUs">About Us</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Module" element={<Module/>}/>
          <Route path="/Exams" element={<Exams/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
        </Routes>


     </Router>
      </div>

      

     
    </>
  );

}

 export default App;