import React, { useState,useEffect,useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Context from '../../store/context';
import Input from '../UI/Input/input';

const emailReducer = (prestate, action)=>{
   if(action.type="emailinput")
   {
    return {value: action.payload, valid:action.payload.includes("@")}
   }
   if(action.type = "emailcheck"){
    return {value: prestate.value, valid : action.payload.includes("@")}
   }
  
}

const passwordReducer = (prestate, action)=>{
  if(action.type="passwordinput"){
    return {value : action.payload, valid:action.payload.trim().length>6}
  }

  if(action.type="passwordcheck"){
      return {value:prestate.value, valid:action.payload.trim().length>6}
  }
}

const Login = () => {
  let authctx = useContext(Context);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  const [emailstate, dispatchfun] = useReducer(emailReducer, {value : "", valid : undefined})
   const [passwordstate, dispatch] = useReducer(passwordReducer, {value : '', valid : undefined})

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const[enteredclg, setClg] = useState('');
  const [clgisvalid, setClgvalid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{

    let x = setTimeout(()=>{
      console.log("checking form validity");
      console.log(emailstate.value, passwordstate.value);
      setFormIsValid(
        emailstate.value.includes('@') && passwordstate.value.trim().length > 6 && (enteredclg.trim().length >0)
      );
    },500);
    // setFormIsValid(
    //   enteredEmail.includes('@') && enteredPassword.trim().length > 6 && (enteredclg.trim().length >0)
    // );
    return ()=>{console.log("cleanup"); clearTimeout(x)}
  }, [emailstate.value, passwordstate.value,enteredclg]);


  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value); 
    dispatchfun({action: "emailinput", payload : event.target.value})
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatch({action : "passwordinput", payload:event.target.value})
  };

  const clgChangeHandler = (event) =>{
    setClg(event.target.value);
  }

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchfun({action: "emailcheck", payload: emailstate.value})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatch({action:"passwordcheck", payload:passwordstate.value})
  };

  const validateclgHandler = ()=>{
    setClgvalid(enteredclg.trim().length > 0)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    authctx.onLogin(emailstate.value, passwordstate.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <div
          className={`${classes.control} ${
            emailstate.valid === false ? classes.invalid : ''
          }`} */}
        {/* > */}
          {/* <label htmlFor="email">E-Mail</label> */}
          {/* <input
            type="email"
            id="email"
            value={emailstate.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          /> */}
          <Input type="email" id="email" label='email' value = {emailstate.value} valid ={emailstate.valid} onchange={emailChangeHandler} onblur={validateEmailHandler}/>
        {/* </div> */}
        {/* <div
          className={`${classes.control} ${
            passwordstate.valid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordstate.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
         <Input type="password" id="password" label='Password' value = {passwordstate.value} valid ={passwordstate.valid} onchange={passwordChangeHandler} onblur={validatePasswordHandler}/>

        <div
          className={`${classes.control} ${
            clgisvalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="pass">College Name</label>
          <input
            type="text"
            id="pass"
            value={enteredclg}
            onChange={clgChangeHandler}
            onBlur={validateclgHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid} onClick={authctx.onLogin}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
