import React, { useState } from 'react';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Box, Fade } from '@mui/material';
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
      <Box className="App" sx={{ display: 'flex', height: '100vh' }}>
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} className='sidebar' />
          <main className='content'>
            <Fade in={true} timeout={1000}>
                <Box>
                    {renderSection()}
                </Box>
            </Fade>
          </main>
      </Box>
  );
}

export default App;