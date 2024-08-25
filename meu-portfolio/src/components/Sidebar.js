import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../assets/perfil-1.jpeg';
import ThemeToggle from './ThemeToggle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';

const Sidebar = () => {
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
            <a href="#home">
              <HomeOutlinedIcon />
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="#about">
              <PersonOutlinedIcon />
              <p>Sobre Mim</p>
            </a>
          </li>
          <li>
            <a href="#skills">
              <AutoStoriesOutlinedIcon />
              <p>Habilidades</p>
            </a>
          </li>
          <li>
            <a href="#projects">
              <AssignmentTurnedInOutlinedIcon />
              <p>Projetos</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <PermContactCalendarOutlinedIcon />
              <p>Contato</p>
            </a>
          </li>
        </ul>
        <div className='theme-toggle'>
          <ThemeToggle />
        </div>
      </nav>
      <div className='footer-sidebar'>
        <p>&copy; Copyright Portfólio</p>
        <p>Desenvolvido por Caio Anderson.</p>
      </div>
    </div>
  );
};

export default Sidebar;