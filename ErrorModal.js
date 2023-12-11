import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css'
import  ReactDOM from 'react-dom';  

const Backdrop = (props)=> {return <div className={classes.backdrop} onClick={props.handleerror}/>}

const Modal = (props) =>{ return  <Card className={classes.modal}>
<header className={classes.header}>
    <h2>{props.title}</h2>
</header>
<div className={classes.content}>
    <p>{props.message}</p>
</div>

<footer className={classes.actions}>
    <Button onClick={props.handleerror}>Okay</Button>
</footer>
</Card>}

const ErrorModal = (props)=>{

   
    return <>
     { ReactDOM.createPortal(<Backdrop handleerror={props.handleerror}/>,document.getElementById('modals'))}
     { ReactDOM.createPortal(<Modal handleerror={props.handleerror} title={props.title} message={props.message} />, document.getElementById('modalss')) }
    
    </>
    
}

export default ErrorModal;