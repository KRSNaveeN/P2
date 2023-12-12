import { forwardRef, useImperativeHandle, useRef } from 'react';
import classes from './input.module.css'
const Input = forwardRef((props, ref)=>{
    const inputref = useRef();

    let active  = ()=>{
        inputref.current.focus();
    }

    useImperativeHandle(ref, ()=>{
        return {
            activate : active
        }
    })
    return <>    
    <div
    className={`${classes.control} ${
      props.valid === false ? classes.invalid : ''
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input ref={inputref} type={props.type} id={props.id} value={props.value} onChange={props.onchange} onBlur={props.onblur}/>
    </div>
</>

})

export default Input;