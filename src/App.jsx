import './app.css';
import {Routes, Route} from "react-router-dom";
import Landing from './components/Landing';
import About from './screens/About';
import Projects from './components/Projects';
import Mentors from './components/Mentors';
import { useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  const [scrollNav, setScrollNav] = useState(true)
  const switchNav = () => {
    if(window.scrollY > 50 ){
      setScrollNav(false)
    }else if(window.scrollY < 50 ){
      setScrollNav(true)
    }
  }
  window.addEventListener('scroll', switchNav)

  return (
    <div className="app">
          <Navbar scroll={scrollNav} />
            <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='/cv' element={<Mentors />} />
          </Routes>
    </div>
  );
}

export default App;
