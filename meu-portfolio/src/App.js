import React from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Hint from './components/Hint';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import ThemeToggle from './components/ThemeToggle.js';
import './styles.css';

function App() {
  return (
      <div className="App">
          <Header className='header' />
          <Sidebar className='sidebar' />
          <main>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Hint />
              <Contact />
          </main>
          <ThemeToggle className='theme-toggle' />
      </div>
  );
}

export default App;