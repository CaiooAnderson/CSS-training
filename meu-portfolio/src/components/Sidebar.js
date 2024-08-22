import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../assets/perfil-1.jpeg'; // Coloque sua foto na pasta src/assets
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='profile-section'>
        <img src={profilePic} alt="Perfil" className="profile-pic" />
        <ThemeToggle />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;