
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
   
    </BrowserRouter>
  )
}

export default App;
