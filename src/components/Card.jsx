import './styles/CardStyles.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function Card(props){
    return(
        <div className='Card' data-aos={props.Aosdata} data-aos-duration={props.Aosduration}>
            <span className='title'>{props.titulo}</span>
            <div className='Cardbox'>
                <img src={props.image}/>
                <span className='Textobox'>{props.children}</span>
            </div>
        </div>
    )
}

export default Card