import React, { useState } from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Sidebar from './components/Sidebar.js';
import { Fade } from '@mui/material';
import './styles.css';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    const renderSection = () => {
      switch (activeSection) {
        case 'home':
          return <Home />;
        case 'about':
          return <About />;
        case 'skills':
          return <Skills />;
        case 'projects':
          return <Projects />;
        case 'contact':
          return <Contact />;
        default:
          return <Home />;
      }
    };
    
  return (
      <div className="App">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} className='sidebar' />
          <main className='content'>
            <Fade in={true} timeout={1000}>
                <div>
                    {renderSection()}
                </div>
            </Fade>
          </main>
      </div>
  );
}

export default App;