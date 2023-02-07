import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
const Form = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    
    
    

    const submit=(event)=>{
        event.preventDefault()
        navigate('/info',{state:{
            name:name,
            phone:phone,
            age:age

    }})

    }
    
     return(
       <>
        <form >
        <label>
          Enter your Name:
          <input type="text" name="name"  onChange={(e)=>setName(e.target.value)}/>
          <input type="text" name="phone"  onChange={(e)=>setPhone(e.target.value)}/>
          <input type="text" name="age"  onChange={(e)=>setAge(e.target.value)}/>
        </label><br></br> 
        <button onClick={submit}> Submit</button>
    
        </form>
</>
     )
    }

    
    export default Form;
  