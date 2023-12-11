import React, {useState, useRef} from 'react'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import classes from '../Users/AddUser.module.css'
  
const AddUser = (props)=>{

// const [username, setUsername] = useState('');
// const [age,setAge] = useState('');

const [error,setError]=useState();

let naam = useRef();
let agee =useRef();
let college =useRef();


    function submitHandler(e){
        e.preventDefault();

        let x = naam.current.value;
        let y = agee.current.value;
        let z = college.current.value;

        // if(username.trim().length === 0 && age.trim().length === 0){
        //     setError({
        //         title:"Invalid Input",
        //         message: "Please enter a valid name and age"
        //     })
        //     return;
        // }

        // if(username.trim().length === 0 ){
        //     setError({
        //         title:"Invalid Name",
        //         message : "Please enter a valid name"
        //     })
        //     return;
        // }
        // if(+age < 1){
        //     setError({
        //         title:"Invalid age",
        //         message:"Please enter a valid age"
        //     })
        //     return;
        // }

        if(x.trim().length === 0 && y.trim().length === 0 && z.trim().length === 0){
            setError({
                title:"Invalid Input",
                message: "Please enter a valid name and age and length"
            })
            return;
        }
        if(x.trim().length === 0 ){
            setError({
                title:"Invalid Name",
                message : "Please enter a valid name"
            })
            return;
        }
        if(+y < 1){
            setError({
                title:"Invalid age",
                message:"Please enter a valid age"
            })
            return;
        }
        if(z.trim().length === 0 ){
            setError({
                title:"Invalid college",
                message:"Please enter a valid college name"
            })
            return;
        }

      
        props.adduser({name: x, age:y, college :z});

       console.log(x, y,z);

    //    setUsername('');
    //    setAge('')
       naam.current.value='';
       agee.current.value='';
       college.current.value ='';
        };

        // function namechangeHandler(event){
        //      setUsername(event.target.value);
        // }

        // function agechangeHandler(event){
        //     setAge(event.target.value);
        // }

        function errorHandler(){
            setError(null);
        }
    
  return (<>
   {error && <ErrorModal handleerror={errorHandler} title={error.title} message={error.message}/>}
    <Card className={classes.input}>
    <form className='adduser'  onSubmit={submitHandler} >
       <div>
           <label htmlFor="name">Username</label>
           
           <input ref={naam} type="text"  id='name'/>
       </div>
       <div>
           <label htmlFor="age">Enter Age</label>
           <input ref={agee} type="number"  id="age"/>
       </div>

       <div>
           <label htmlFor="clg">Enter College</label>
           <input ref={college} type="text"  id="clg"/>
       </div>
       <Button type='submit' >Add User</Button> 
    </form>
    </Card>
    </>
  )
}

export default AddUser
