import '../styles/fab.css';

function FloatingActionButton (props) {
   return (<div className="fab" id={ props.id } onClick={() => props.onclick()}>{ props.content }</div>);
}

export default FloatingActionButton;