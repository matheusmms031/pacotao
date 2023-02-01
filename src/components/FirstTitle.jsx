import './styles/FirstTitleStyles.scss'


function FirstTitle(props){
    return(
    <div className='first-title'>
        <span className='title'>{props.title}</span>
        <span className='content'>{props.children}</span>
    </div>
    )
}

export default FirstTitle