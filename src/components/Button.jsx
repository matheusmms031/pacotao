import './styles/ButtonStyles.scss'

export function Button(props){
    return(
        <a href={props.href} style={{'textDecoration':'none'}}>
            <div className='buttoncomp1'>
                {props.children}
            </div> 
        </a>      
    )
}

export default Button;