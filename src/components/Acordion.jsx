import Accordion from 'react-bootstrap/Accordion';
import './styles/Acordion.scss'

function Acordion() {
  return (
    <Accordion defaultActiveKey="0" className='acordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
            Introdução ao Python
          </Accordion.Header>
        <Accordion.Body>
          Do básico ao avançado contendo listas, tuplas, dicionários, tipos primitivos de váriaveis, laços de repetição,
          estruturas condicionais, manipulação de strings, manipulando listas e entre outras.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Redes</Accordion.Header>
        <Accordion.Body >
          Aprenderemos como fazer requisições a uma API de exemplo e também a como ler documentação de tais para no futuro conseguir utilizar seu aprendizado no mercado de trabalho.  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Requests</Accordion.Header>
        <Accordion.Body >
          Fazer requisição para sites utilizando a biblioteca Requests, aprenderemos também os metódos GET, POST, PUT, DELETE, HEAD isso com o decorrer do curso.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>WebScraping</Accordion.Header>
        <Accordion.Body >
          WebScrapping com BeautifullSoup com intuito de analisar respostas de requisições GET e POST e automatizar tarefas envolvendo WEB para criação de BOTs ou APIs  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Requesitando APIs</Accordion.Header>
        <Accordion.Body >
          Aprenderemos como fazer requisições a uma API de exemplo e também a como ler documentação de tais para no futuro conseguir utilizar seu aprendizado no mercado de trabalho.  
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordion;