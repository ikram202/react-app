import React , {useEffect, useState} from 'react';
export default function FormInscription(){
    const [login,setLogin]=useState();
    const [date,setDate]=useState();
    const [ville,setVille]=useState('');
    const [genre,setGenre]=useState('');
    const [loisirs,setLoisirs]=useState('');
    const [message,setMessage]=useState();

    const afficher=(e)=>{
        e.preventDefault();
        setMessage("Hello 👋🏻 , my name is " + login + " , I'm " + genre + ",  born on : " + date + ", in " + ville + " , my hobbies are :" + loisirs + "")
    }

    const MyForm=(
        <div className=" container w-50 mt-5 border border-secondary rounded alert">
            <h1 className="alert d-flex justify-content-center alert alert-primary"> <u>Login </u></h1>
            <div className="form ">
                <form onSubmit={afficher}>
                    <div className="input-container">
                        <label> Username </label>
                        <input  className='form-control' placeholder='Enter your username or email' type="text" onChange={(e)=>{setLogin(e.target.value)}} />

                        <label> Password  </label>
                        <input  className='form-control' type="password"  />
                    
                        <label > Date of birth </label>
                        <input  className='form-control' type="date" onChange={(e)=>{setDate(e.target.value)}} />
                    
                        <label > City </label>
                        <select  className='form-control' onChange={(e)=>{setVille(e.target.value)}}>
                            <option value="-1" >Choose City</option>
                            <option value="Casablanca">Casablanca</option>
                            <option value="Fès">Fès</option>
                            <option value="Tanger">Tanger</option>
                            <option value="Rabat">Rabat</option>
                        </select>
                        <label >Gender </label> <br />
                        <input type="radio" value="male"  name="genre"  onClick={(e)=>{setGenre(e.target.value)}}/> Male 🚹 &nbsp; &nbsp; &nbsp;
                        <input type="radio" value="female"  name="genre"  onClick={(e)=>{setGenre(e.target.value)}}/> Female 🚺<br />
                        <br />
                        <label >Hobbies   </label> <br />
                        <input type="checkbox" name="loisirs" value="coding" onClick={(e)=>{setLoisirs(e.target.value)}} /> Coding 👨🏻‍💻&nbsp; &nbsp;
                        <input type="checkbox" name="loisirs" value="traveling" onClick={(e)=>{setLoisirs(e.target.value)}} /> Traveling 🗺️ &nbsp; &nbsp;
                        <input type="checkbox" name="loisirs" value="music" onClick={(e)=>{setLoisirs(e.target.value)}} /> Music 🎤 &nbsp; &nbsp;
                        <input type="checkbox" name="loisirs" value="drawing" onClick={(e)=>{setLoisirs(e.target.value)}} /> Drawing 👨🏻‍🎨 &nbsp; &nbsp;
                        <br /><br />
                        <input type="submit" className='btn btn-primary form-control ' value="Connect" />
                    </div> <br />
                    <div className='container  mt-5 border border-secondary rounded alert'>
                       <h3 className="alert">{message}</h3> 
                    </div>
                    
                    
                </form>
            </div>
        </div>
    );

    return (
        <div className="app">
            {MyForm}
        </div>
    );
}