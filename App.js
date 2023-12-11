import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Context from './store/context';


function App() {
 let ctx = useContext(Context);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(()=>{
  //   if(localStorage.getItem('loggedin') === "1"){
  //     setIsLoggedIn(true);
  //   }
  // }, [])

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
  //   localStorage.setItem("loggedin", '1')
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem("loggedin");
  // };

  return (
    <React.Fragment>
      
      <MainHeader  />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home  />}
      </main>
      
    </React.Fragment>
  );
}

export default App;
