import "../styles/homestyle.scss"
import Logo from "../assets/Ellipse 2.png"
import Button from "../components/Button"
import '../font/Sofia/SofiaSans-Bold.ttf'
import ButtonGrande from "../components/ButtonGrande.jsx"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Estudante from '../assets/estudante.svg'
import Empresarios from '../assets/engenheiros.svg'
import Trabalhadores from '../assets/trabalhadores.svg'
import Card from "../components/Card"
import Acordion from "../components/Acordion"
import 'bootstrap/dist/css/bootstrap.min.css';
import Notification from "../components/Notification"
import FirstTitle from "../components/FirstTitle"
import Opcoes from "../components/Opcoes"
import Book from '../assets/book.svg'
import Discord from '../assets/discord.svg'
import Atividade from '../assets/atividades.svg'
import Afiliado from '../assets/alunoafiliado.svg'
import Pessoa from '../assets/eu.jpg'


export function Home(){
    useEffect(() => {
        Aos.init({duration: 2000}), []
    })


    return(
        <div>
            <div id='app'>
                <div id='coloroverlay'>
                    <section id='intro1'>
                        <header id='cabecalho'>
                                <div id='logo'>
                                    <img src={Logo} style={{'hover':{'width':'500px'}}}/>
                                    Codersmasters
                                </div>
                            <Button>QUERO PARTICIPAR</Button>
                        </header>
                        <main id='maincab'>
                            <div id='caixa1'>
                                <div id='texts'>
                                    <span id='title'>Aprenda e domine a linguagem Python no nosso curso <span className="marcadorprincipal">Guia do Pythonista</span> e seja um dos programadores mais bem pagos da atualidade</span>
                                    <span id='preco'>9x R$8,40 ou R$67 à vista</span>
                                </div>
                                <ButtonGrande>COMECE AGORA</ButtonGrande>
                            </div>
                        </main>
                    </section>
                </div>
                <div id='back2'>
                    <section id='intro2'>
                        <div id='habilidade'>
                            <span id='title' data-aos='fade-up'>Para quem este curso é adequado?</span>
                            <div id='cards'>
                                <div id='intro2box'>
                                    <Card titulo='Estudantes' Aosdata='zoom-in' Aosduration='1500' image={Estudante}>Para os estudantes que pretendem aprender a programar por hobbie ou procurarem um trabalho futuro na area.</Card>
                                    <Card titulo='Empresários' Aosdata='zoom-in' Aosduration='1500' image={Empresarios}>É utilizado muito pelos empresários e empresas, o que pode ser de grande atrativo para seu negócio</Card>
                                    <Card titulo='Trabalhadores' Aosdata='zoom-in' Aosduration='1500' image={Trabalhadores}>E para aqueles que já estão em uma empresa e querem alavancar dentro da sua empresa.</Card>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section id='intro3'>
                    <div id='aprender'>
                        <div id='aprendertitle'>
                            <span id='tituloaprender'>O que veremos no curso ?</span>
                            <span id='subtitle'>Tudo o que estará disponível no curso aqui será ditas nos acordiões do lado ou abaixo</span>
                        </div>
                        <div id='aprendercontent'>
                            <Acordion/>
                        </div>
                    </div>
                </section>
                <section id='intro4'>
                    <div id='primary-box'>
                        <FirstTitle title='O nosso curso vai além de aulas!'>Aqui na Codersmasters não focamos apenas em formar alunos, como também procuramos criar laços,vinculos de amizades entre alunos e criar um curso para todos com um valor acessivel, para isso temos as seguintes práticas:</FirstTitle>
                        <div id='second-box'>
                            <Opcoes Aosdata='fade-up' Aosduration='1500' title='Servidor do Discord' image={Discord}>
                                Nós da Codersmasters disponibilizaremos partes 
                                exclusivas de um servidor do Discord para alunos tirarem suas dúvidas e 
                                cooperarem na resolução de atividades e projetos.
                            </Opcoes>
                            <Opcoes Aosdata='fade-up' Aosduration='2000' title='E-book' image={Book}>
                                Para auxiliar as aulas e o aprendizado dos alunos decidimos 
                                em equipe criar um e-book, usaremos ele de referência maior no decorrer do curso.
                            </Opcoes>
                            <Opcoes Aosdata='fade-up' Aosduration='1500' title='Atividades' image={Atividade}>
                                No intuito de melhorar a nossa didática criamos uma lista de atividades para os alunos realizarem,
                                 atividades essas que tem resolução no e-book digital, disponivel juntamente com a compra do curso.
                             </Opcoes>
                            <Opcoes Aosdata='fade-up' Aosduration='2000' title='Aluno afiliado' image={Afiliado}>
                                Como sabemos que o valor de R$ 250,00 é muito dinheiro para alguns, tivemos a ideia de fazer
                                com que alunos possam vender o curso para amigos com o link de afiliado ganhando 50% de comissão.
                            </Opcoes>
                        </div>
                    </div>
                </section>
                <section id='intro5'>
                    <div id='perfilbox'>
                        <img src={Pessoa} id='perfilbox-image'/>
                        <div id='perfilbox-content'>
                            <span id='perfilbox-cabecalho'>Quem é o professor?</span>
                            <span id='perfilbox-name'>Matheus Magalhães</span>
                            <span id='perfilbox-stats'>Criador da Codersmasters</span>
                            <span id='perfilbox-text'></span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Home