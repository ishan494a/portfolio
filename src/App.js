import Navbar from './components/Navbar';
import About from './pages/About';
import './App.css';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Card from './components/Card';

import { Route, Routes } from 'react-router-dom';

function App() {


  return (
  <div>
    <div className='topb'>
    <Navbar/>
    </div>
    <div>
    <Routes>
      <Route path = '/portfolio' element = {
      <div>
      <header className='intro'>Hi, I am <span className = 'name'>Ishan Jain</span></header>
      </div>
      }/>
      <Route path = '/about' element={<Card><About/></Card>}/>
      <Route path = '/skills' element={<Card><Skills/></Card>}/>
      <Route path = '/projects' element={<Card><Projects/></Card>}/>
      <Route path = '/contact' element={<Card><Contact/></Card>}/>
    </Routes>
    </div>
  </div>
    
  );
}

export default App;