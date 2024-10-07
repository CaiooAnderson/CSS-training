import React, { useState, useEffect } from 'react';
import { Zoom, Box } from '@mui/material';
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
  const [currentTitle, setCurrentTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];
      const updatedText = isDeleting
        ? fullText.substring(0, currentTitle.length - 1)
        : fullText.substring(0, currentTitle.length + 1);

      setCurrentTitle(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(50);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };
    
    const titles = ['Front-End', 'Back-End', 'Full-Stack'];
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentTitle, isDeleting, loopNum, typingSpeed]);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="menu-button" onClick={toggleSidebar}>
        <MenuIcon />
      </button>
    <Zoom in={isOpen} timeout={500}>
      <Box className='profile-section' sx={{ 
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            '@media (max-width: 1024px)': {
                                              marginBottom: '10px'
                                            }
                                          }}>
        <img src={profilePic} alt="Perfil" className="profile-pic" style={{ 
                                                                            outline: '4px solid #000',
                                                                            width: '100px',
                                                                            height: '100px',
                                                                            borderRadius: '50%',
                                                                            objectFit: 'cover',
                                                                            marginBottom: '10px',
                                                                            animation: 'shineAndDecay 10s infinite',
                                                                            '&': {
                                                                              maxWidth: '100%'
                                                                            },
                                                                            '@media (max-width: 1024px)': {
                                                                              width: '100px',
                                                                              height: '100px'
                                                                            }
                                                                          }} />
        {isOpen && (
          <>
            <h2 className='titulo'>Caio Anderson</h2>
            <p className='subtitulo'>Desenvolvedor {currentTitle}</p>
          </>
        )}
      </Box>
    </Zoom>
      <nav>
        <ul>
          <li>
            <button href='#home' className={activeSection === 'home' ? 'active' : ''} onClick={() => handleButtonClick('home')}>
              <HomeOutlinedIcon className='icon' />
              {isOpen && <p>Home</p>}
            </button>
          </li>
          <li>
            <button className={activeSection === 'about' ? 'active' : ''} onClick={() => handleButtonClick('about')}>
              <PersonOutlinedIcon className='icon' />
              {isOpen && <p>Sobre Mim</p>}
            </button>
          </li>
          <li>
            <button className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleButtonClick('skills')}>
              <AutoStoriesOutlinedIcon className='icon' />
              {isOpen && <p>Habilidades</p>}
            </button>
          </li>
          <li>
            <button className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleButtonClick('projects')}>
              <AssignmentTurnedInOutlinedIcon className='icon' />
              {isOpen && <p>Projetos</p>}
            </button>
          </li>
          <li>
            <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleButtonClick('contact')}>
              <PermContactCalendarOutlinedIcon className='icon' />
              {isOpen && <p>Contato</p>}
            </button>
          </li>
        </ul>
        <Box className='theme-toggle' sx={{ 
                                          display: 'flex',
                                          flexDirection: 'row-reverse',
                                          marginBottom: '10px',
                                          '@media (max-width: 1024px)': {
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            marginBottom: '5px',
                                          },
                                          '@media (max-width: 320px)': {
                                            marginBottom: 0,
                                            height: '30px'
                                          }
                                        }}>
          <ThemeToggle />
        </Box>
      </nav>
      <Zoom in={isOpen} timeout={300}>
      <Box className='footer-sidebar' sx={{ 
                                          fontSize: 'small',
                                          textAlign: 'center',
                                          fontWeight: '500'
                                        }}>
        <p>&copy; Copyright Portfólio</p>
        <p>Desenvolvido por Caio Anderson</p>
      </Box>
      </Zoom>
    </Box>
  );
};

export default Sidebar;