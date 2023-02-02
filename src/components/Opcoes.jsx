import './styles/OpcoesStyles.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Opcoes(props){
    return(
        <div className="opcoes" data-aos={props.Aosdata} data-aos-duration={props.Aosduration}>
            <div className='boxtitleopcoes'>
                <img src={props.image} className='imagebox'/>
                <span className="opcoes-title">{props.title}</span>
            </div>

            <span className="opcoes-content">{props.children}</span>
        </div>
    )
}

export default Opcoes