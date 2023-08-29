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
    <Navbar/>

    {/* <Card><About/></Card>
    <Card><Skills/></Card>
    <Card><Projects/></Card>
    <Card><Contact/></Card> */}
    <div>
    <Routes>
      <Route path = '/portfolio' element = {
      <div>
      <header className='intro'>Hi, I am <h className = 'name'>Ishan Jain</h></header>
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
