import './styles/ButtonStyles.scss'

export function Button(props){
    return(
        <div className='buttoncomp1'>
            {props.children}
        </div>       
    )
}

export default Button;