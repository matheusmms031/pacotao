import '../components/styles/PerfilBoxStyles.scss'


function PerfilBox(props){
    return(
        <div id='perfilbox'>
            <img src={props.image}/>
            <div id='perfilbox-content'>
                <span id='perfilbox-name'>{props.name}</span>
                <span id='perfilbox-text'>{props.children}</span>
            </div>
        </div>
    )
}



export default PerfilBox