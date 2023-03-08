import React, {useState} from "react";
import {useSelector , useDispatch } from 'react-redux';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('') 
  const dispatch = useDispatch()
  const user = useSelector(state=>state.loginUser)
  const login = () =>{
    if(user.email === email && user.password === password) {
        dispatch ({type:'LOGIN'})
    }else{
        setMsg ('email or password incorrect ')
    }
  }

 return (
    <div className=" mt-5 d-flex justify-content-center align-items-center ">

    <div className=" w-50 border border-secondary rounded alert">
      <h1 className="alert alert-primary text-center "> Log In Page </h1>
      <hr/>

     <form className="alert alert-light"> 

     <label className="text-dark "> <u> Email </u> </label> <br />
     <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control border border-secondary" placeholder="Enter Your Email" value={email}/>

    <br/>

     <label className="text-dark " > <u> Password </u> </label> <br />
     <input onChange={(e)=>setPassword(e.target.value)}type="text" className="form-control border border-secondary "placeholder="Enter Your Password" value={password} />
     
    <br/>
    <button onClick={login} className="btn btn-primary form-control "> Log In </button>
    <p className="text-danger "> {msg} </p>
    <a href="#"> Forgot Password? </a>

   </form>
   </div>
 </div>
 

 );
}
