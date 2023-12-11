import React, {useState} from 'react'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import classes from '../Users/AddUser.module.css'
  
const AddUser = (props)=>{
const [username, setUsername] = useState('');
const [error,setError]=useState();
const [age,setAge] = useState('');

    function submitHandler(e){
        e.preventDefault();
        if(username.trim().length === 0 && age.trim().length === 0){
            setError({
                title:"Invalid Input",
                message: "Please enter a valid name and age"
            })
            return;
        }
        if(username.trim().length === 0 ){
            setError({
                title:"Invalid Name",
                message : "Please enter a valid name"
            })
            return;
        }
        if(+age < 1){
            setError({
                title:"Invalid age",
                message:"Please enter a valid age"
            })
            return;
        }
        props.adduser({name: username, age:age})

       console.log(username, age);
       setUsername('');
       setAge('')
       
        };

        function namechangeHandler(event){
             setUsername(event.target.value);
        }

        function agechangeHandler(event){
            setAge(event.target.value);
        }

        function errorHandler(){
            setError(null);
        }
    
  return (<>
   {error && <ErrorModal handleerror={errorHandler} title={error.title} message={error.message}/>}
    <Card className={classes.input}>
    <form className='adduser'  onSubmit={submitHandler} >
       <div>
           <label htmlFor="name">Username</label>
           
           <input type="text" value={username} id='name' onChange={namechangeHandler}/>
       </div>
       <div>
           <label htmlFor="age">Enter Age</label>
           <input type="number" value={age} id="age" onChange={agechangeHandler}/>
       </div>
       <Button type='submit' >Add User</Button> 
    </form>
    </Card>
    </>
  )
}

export default AddUser
