import Hint from './Hint.js'

const Contact = () => {

    const tips = [
        'Conecte-se comigo nas redes sociais para acompanhar meu trabalho e projetos.',
        'Fique à vontade para me enviar uma mensagem, seja sobre projetos ou uma simples troca de ideias.',
        'Um grande exemplo do CSS sem o JavaScript é: Como uma nave tão linda assim não consegue voar?',
        'Estou a procura de novas oportunidades e colaborações!',
        'Talvez Jack Sparrow não gostaria tanto de TypeScript, pois ele gosta de caminhar fora das leis.',
        'Caso queira me dar algum feedback sobre o meu portfólio fico agradecido, mesmo com elogios ou críticas!',
        'Então na verdade é só comentar o erro na linha de código que o erro desaparece?',
        'Este portfólio foi feito com amor, carinho e um pouco de CSS. Bem pouco mesmo..',
        'Acho que os sabres de luz da saga Star Wars possuem o filtro de brightness e drop-shadow muito altos.',
        'Então foi assim que você começou na programação? Com um hello world? Que chique, o meu foi um comando para tirar o erro de tela azul do meu computador!',
        'Bônus: Ser programador é passar metade do tempo resolvendo problemas e a outra metade tentando lembrar o que você estava fazendo.'
    ]

    return (
        <section id="contact">
            <h2>Contact</h2>
            <div>
                <a href="https://linkedin.com/in/caioandersongoes" target="_blank" rel="noreferrer">
                    <img src="path_to_icons/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/CaiooAnderson" target="_blank" rel="noreferrer">
                    <img src="path_to_icons/github.png" alt="GitHub" />
                </a>
                <a href="mailto:caio2.dev@gmail.com">
                    <img src="path_to_icons/gmail.png" alt="Gmail" />
                </a>
            </div>
            <Hint tips={tips} />
        </section>
    );
}

export default Contact;