import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <section id="home">
          <h1>Bem-vindo ao Meu Portfólio</h1>
        </section>
        <section id="about">
          <h2>Sobre Mim</h2>
          {/* Conteúdo sobre você */}
        </section>
        <section id="skills">
          <h2>Habilidades</h2>
          {/* Lista de habilidades */}
        </section>
        <section id="projects">
          <h2>Projetos</h2>
          {/* Lista de projetos */}
        </section>
        <section id="contact">
          <h2>Contato</h2>
          {/* Formulário de contato */}
        </section>
      </div>
    </div>
  );
}

export default App;