import Hint from './Hint.js'

const Contact = () => {

    const tips = [
        'Não possuo habilidade em Node.js, que é o mais pedido em mercados',
        'Aprimorar as habilidades em React pode ser uma boa estratégia',
        'Considere aprender TypeScript para aumentar suas oportunidades',
        'Conecte-se comigo nas redes sociais para acompanhar meu trabalho e projetos.',
        'Fique à vontade para me enviar uma mensagem, seja sobre projetos ou uma simples troca de ideias.',
        'Estou a procura de novas oportunidades e colaborações!',
        'Caso queira me dar algum feedback sobre o meu portfolio fico agradecido, mesmo com elogios ou críticas!',
        'Este portfolio foi feito com amor, carinho e um pouco de CSS. Bem pouco mesmo..',
        'Então na verdade é só comentar o erro na linha de código que o erro desaparece?',
        'Acho que os sabres de luz da saga Star Wars possuem o filtro de brightness e drop-shadow muito altos.',
        'Então foi assim que você começou na programação? Com um hello world? Que chique, o meu foi um comando para tirar o erro de tela azul do meu computador!'
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