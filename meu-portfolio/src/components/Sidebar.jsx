import React, { useState, useEffect } from 'react';
import { Zoom } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../assets/perfil-1.jpeg';
import ThemeToggle from './ThemeToggle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="menu-button" onClick={toggleSidebar}>
        <MenuIcon />
      </button>
    <Zoom in={isOpen} timeout={500}>
      <div className='profile-section'>
        <img src={profilePic} alt="Perfil" className="profile-pic" />
        {isOpen && (
          <>
            <h2 className='titulo'>Caio Anderson</h2>
            <p className='subtitulo'>Desenvolvedor Front-End</p>
          </>
        )}
      </div>
    </Zoom>
      <nav>
        <ul>
          <li>
            <button href='#home' className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>
              <HomeOutlinedIcon className='icon' />
              {isOpen && <p>Home</p>}
            </button>
          </li>
          <li>
            <button className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>
              <PersonOutlinedIcon className='icon' />
              {isOpen && <p>Sobre Mim</p>}
            </button>
          </li>
          <li>
            <button className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>
              <AutoStoriesOutlinedIcon className='icon' />
              {isOpen && <p>Habilidades</p>}
            </button>
          </li>
          <li>
            <button className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>
              <AssignmentTurnedInOutlinedIcon className='icon' />
              {isOpen && <p>Projetos</p>}
            </button>
          </li>
          <li>
            <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>
              <PermContactCalendarOutlinedIcon className='icon' />
              {isOpen && <p>Contato</p>}
            </button>
          </li>
        </ul>
        <div className='theme-toggle'>
          <ThemeToggle />
        </div>
      </nav>
      <Zoom in={isOpen} timeout={300}>
      <div className='footer-sidebar'>
        <p>&copy; Copyright Portfólio</p>
        <p>Desenvolvido por Caio Anderson</p>
      </div>
      </Zoom>
    </div>
  );
};

export default Sidebar;