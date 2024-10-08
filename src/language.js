import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      titles: ['Front-End', 'Back-End', 'Full-Stack'],
      developer: '{{currentTitle}} Developer',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      footer: {
        copyright: '© Portfolio',
        developedBy: 'Developed by Caio Anderson',
      },
      theme: {
        light: 'Light',
        dark: 'Dark'
      }
    },
  },
  pt: {
    translation: {
      titles: ['Front-End', 'Back-End', 'Full-Stack'],
      developer: 'Desenvolvedor {{currentTitle}}',
      home: 'Home',
      about: 'Sobre Mim',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
      footer: {
        copyright: '© Portfólio',
        developedBy: 'Desenvolvido por Caio Anderson',
      },
      theme: {
        light: 'Claro',
        dark: 'Escuro'
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;