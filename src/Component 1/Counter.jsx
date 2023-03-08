import React from "react";
import {useSelector , useDispatch} from 'react-redux';


export default function Counter() {
    const count = useSelector ( (state)=> state.counter.count)
    const dispatch = useDispatch()
 
   return(
    <div className=" mt-5  d-flex justify-content-center align-items-center ">

    <div className="w-50 border border-secondary rounded alert">
      <h1 className="alert alert-danger text-center "> Counter </h1>
      <hr/>
        <button className="btn btn-dark float-end " onClick={ ()=> dispatch ({type:'LOGOUT'})}> LOGOUT </button>
          <h2>{count}</h2> <br/>

         <button className="btn btn-success" onClick={()=>dispatch({type: 'INC'})} > Increment </button> &nbsp; &nbsp;
         <button className="btn btn-primary" onClick={()=>dispatch({type: 'INCV' ,pyload:10 })} > Incrementer par 10 </button> &nbsp; &nbsp;
         <button className="btn btn-danger" onClick={()=>dispatch({type: 'DEC'})} > Decrement </button> &nbsp; &nbsp;
         <button className="btn btn-warning" onClick={()=>dispatch({type: 'RESET'})} > Reset  </button> &nbsp; &nbsp;
    </div >
    </div >
   );
}

