import './styles/OpcoesStyles.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Opcoes(props){
    return(
        <div className="opcoes" data-aos={props.Aosdata} data-aos-duration={props.Aosduration}>
            <span className="opcoes-title">{props.title}</span>
            <span className="opcoes-content">{props.children}</span>
        </div>
    )
}

export default Opcoes