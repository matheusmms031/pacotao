import './styles/ButtonStyles2.scss'

export function ButtonGrande(props){
    return(
        <a href={props.href} style={{'textDecoration':'none'}}>
            <div className='buttoncomp2'>
                {props.children}
            </div>   
        </a>    
    )
}

export default ButtonGrande;