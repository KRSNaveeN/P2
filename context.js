import React, {useState,useEffect} from "react"
const Context = React.createContext({
    isLoggedIn : false,
    onLogout : ()=>{},
    onLogin :(email,password)=>{}
});

export const AuthContextProvider =(props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem('loggedin') === "1"){
          setIsLoggedIn(true);
        }
      }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        setIsLoggedIn(true);
        localStorage.setItem("loggedin", '1')
      };
    
      const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("loggedin");
      };

    return  <Context.Provider value={{isLoggedIn:isLoggedIn,  onLogout:logoutHandler, onLogin : loginHandler}}>
         {props.children}
    </Context.Provider>
}
export default Context;