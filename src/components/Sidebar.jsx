import React, { useState, useEffect } from 'react';
import { Zoom, Box, Slide } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../assets/perfil-1.jpeg';
import ThemeToggle from './ThemeToggle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const titles = t('titles', { returnObjects: true });

  useEffect(() => {
    if (!titles || titles.length === 0) return;
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
    
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentTitle, isDeleting, loopNum, typingSpeed, titles]);


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
    <Box className={`sidebar ${isOpen ? 'open' : 'closed'}`} sx={{ 
                                                              '&': {
                                                                position: 'fixed',
                                                                top: 0,
                                                                left: 0,
                                                                width: '300px',
                                                                height: '100%',
                                                                background: 'var(--sidebar-background)',
                                                                padding: '20px',
                                                                boxShadow: '2px 0 5px #0000001a',
                                                                borderRight: '2px solid #0000001a',
                                                                zIndex: 1000,
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                transition: 'width 0.3s ease'
                                                              },
                                                              '& nav ul': {
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                textAlign: 'left',
                                                                justifyContent: 'center',
                                                                listStyleType: 'none',
                                                                padding: 0,
                                                                margin: '20px 0 0'
                                                              },
                                                              '& nav ul li': {
                                                                margin: '10px 0 20px',
                                                                width: 'max-content'
                                                              },
                                                              '& nav ul li button': {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                textDecoration: 'none',
                                                                fontWeight: 'bold',
                                                                width: '100%',
                                                                border: 'none',
                                                                backgroundColor: 'transparent',
                                                                position: 'relative'
                                                              },
                                                              '& nav ul li button:hover': {
                                                                color: 'var(--button-hover-bg-color)'
                                                              },
                                                              '& nav ul li button p': {
                                                                color: 'var(--text-color)',
                                                                margin: '0 0 0 10px',
                                                                whiteSpace: 'nowrap'
                                                              },
                                                              '& nav ul li button:hover p': {
                                                                color: 'var(--sidebar-text-hover-color)'
                                                              },
                                                              '& button.active p': {
                                                                color: 'var(--sidebar-active-text-color)',
                                                                fontWeight: 'bolder',
                                                                filter: 'drop-shadow(1px 1px 4px #00336680)',
                                                              },
                                                              '& button .icon': {
                                                                color: 'var(--icon-color)',
                                                                width: '24px',
                                                                height: '24px',
                                                              },
                                                              '& button:hover .icon': {
                                                                color: 'var(--sidebar-icon-hover-color)',
                                                              },
                                                              '& button.active .icon': {
                                                                color: 'var(--sidebar-active-icon-color)',
                                                              },
                                                              '& nav ul li button, & button p': {
                                                                transition: '0.2s',
                                                              },
                                                              '& nav': {
                                                                flex: 1,
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                              }
                                                                }}>
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
                                            '.titulo': {
                                              marginTop: '20px',
                                              fontWeight: '600'
                                            },
                                            '.subtitulo': {
                                              fontWeight: '600',
                                              color: 'var(--text-color)',
                                              backgroundColor: 'var(--bg-text-color)',
                                              boxShadow: '0 2px 2px 1px #494949',
                                              padding: '8px',
                                              borderRadius: '16px'
                                            },
                                            '@media (max-width: 1024px)': {
                                              marginBottom: '10px'
                                            },
                                            '@media (max-width: 320px)': {
                                              img: {
                                                marginBottom: '5px'
                                              },
                                              '.titulo': {
                                                fontSize: '1.2rem',
                                                margin: '2px 0'
                                              },
                                              '.subtitulo': {
                                                fontSize: '0.9rem',
                                                margin: 0
                                              }
                                            }
                                          }}>
        <Box component="img" src={profilePic} alt="Perfil" className="profile-pic" sx={{
                                                                                        outline: '4px solid #000',
                                                                                        width: '100px',
                                                                                        height: '100px',
                                                                                        borderRadius: '50%',
                                                                                        objectFit: 'cover',
                                                                                        marginBottom: '10px',
                                                                                        animation: 'shineAndDecay 10s infinite',
                                                                                        maxWidth: '100%',
                                                                                        '@media (max-width: 1024px)': {
                                                                                          width: '100px',
                                                                                          height: '100px'
                                                                                        },
                                                                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                                                                          '.sidebar.open img': {
                                                                                            width: '125px',
                                                                                            height: '125px'
                                                                                          }
                                                                                        }
                                                                                      }} />
        {isOpen && (
          <>
            <h2 className='titulo'>Caio Anderson</h2>
            <p className='subtitulo' translate='no'>{t('developer', { currentTitle })}</p>
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
              {isOpen && <p>{t('about')}</p>}
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
                                            marginBottom: 'auto',
                                            height: '30px'
                                          }
                                        }}>
          <ThemeToggle />
        </Box>
      </nav>
      <Slide in={isOpen} direction='right' timeout={500}>
      <Box className='footer-sidebar' sx={{ 
                                          fontSize: 'small',
                                          textAlign: 'center',
                                          fontWeight: '500',
                                          '@media (max-width: 320px)': {
                                              fontSize: '0.8rem',
                                              marginBottom: 0
                                            }
                                        }}>
        <p>&copy; Copyright Portfólio</p>
        <p>Desenvolvido por Caio Anderson</p>
      </Box>
      </Slide>
    </Box>
  );
};

export default Sidebar;