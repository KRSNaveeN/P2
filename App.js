
import { useState } from 'react';
import './App.css';
import Additem from './Components/Additem';
import Userlist from './Components/Userlist';

function App() {
  const[electronics, setElectronics]= useState([]);
  const [skincare, setSkincare] =useState([]);
  const[food, setFood] =useState([]);
  function data(input){
     console.log(input);
     if(input.option === "Electronics"){
        setElectronics((pre)=>[...pre, input]);
        
     }
     else if(input.option === 'Skincare'){
        setSkincare((pre)=>[...pre, input])
     }
     else{
          setFood((pre)=>[...pre, input])
     }

    //  console.log(electroni)
  }

  function remove(input){
    console.log(input);
    if(input.option === 'Electronics'){
      setElectronics((pre)=> {
        return pre.filter((itemm)=> input.item != itemm.item);
      })
    }

    if(input.option === "Skincare"){
      setSkincare((pre)=> {
        return pre.filter((itemm)=> input.item != itemm.item);
      })
    }

    if(input.option === "Food"){
      setFood((pre)=> {
        return pre.filter((itemm)=> input.item != itemm.item);
      })
    }
    
  }
  return (
    <div >
     <Additem data={data}/>
     <Userlist electronics={electronics} food={food} skincare={skincare} remove={remove}/>
    </div>
  );
}

export default App;
