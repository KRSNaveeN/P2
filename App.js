import { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {

  let obj = []
 const[data, setData] = useState(obj);

  function addUser(input){
     setData((pre)=>{
      return [...pre, input]
     })
  }

  return(  <div> 
      <AddUser adduser={addUser} />
      <UsersList users={data} />
     </div>
  );
}

export default App;
