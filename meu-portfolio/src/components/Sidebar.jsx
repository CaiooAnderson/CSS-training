import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../assets/perfil-1.jpeg';
import ThemeToggle from './ThemeToggle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="sidebar">
      <div className='profile-section'>
        <img src={profilePic} alt="Perfil" className="profile-pic" />
        <h2 className='titulo'>Caio Anderson</h2>
        <p className='subtitulo'>Desenvolvedor Front-End</p>
      </div>
      <nav>
        <ul>
          <li>
            <button href='#home' className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>
              <HomeOutlinedIcon className='icon' />
              <p>Home</p>
            </button>
          </li>
          <li>
            <button className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>
              <PersonOutlinedIcon className='icon' />
              <p>Sobre Mim</p>
            </button>
          </li>
          <li>
            <button className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>
              <AutoStoriesOutlinedIcon className='icon' />
              <p>Habilidades</p>
            </button>
          </li>
          <li>
            <button className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>
              <AssignmentTurnedInOutlinedIcon className='icon' />
              <p>Projetos</p>
            </button>
          </li>
          <li>
            <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>
              <PermContactCalendarOutlinedIcon className='icon' />
              <p>Contato</p>
            </button>
          </li>
        </ul>
        <div className='theme-toggle'>
          <ThemeToggle />
        </div>
      </nav>
      <div className='footer-sidebar'>
        <p>&copy; Copyright Portfólio</p>
        <p>Desenvolvido por Caio Anderson</p>
      </div>
    </div>
  );
};

export default Sidebar;