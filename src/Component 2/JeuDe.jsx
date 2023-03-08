import React from "react";
import { Component } from "react";
export default class JeuDe extends Component{
    constructor(props){
       super (props)
       this.state ={face:null , compteur:0, end:false , im:"/images/de.jpeg"}
    }
    jouer = () => {
       let vface = Math.floor(Math.random()*6+1)
       let src="/images/"+vface+".jpeg"
       this.setState({face:vface, compteur:this.state.compteur+1,end:false,im:src})
       if (vface === this.props.cache){
          this.setState({end:true})
       }
    }
    initialiser = () => {
        this.setState({face:null,compteur:0,end:false , im:"/images/de.jpeg"})
    } 
    render(){
        return(
            <div className=" mt-5 d-flex justify-content-center align-items-center ">

            <div className=" w-50 border border-secondary rounded alert">
            <div>
            
                <h1 className="alert alert-danger "> Jeu de Dé 🎲  </h1>
                <hr />
                <h3>  <u> La face cachée est  : </u>  <img src='./images/2.jpeg' width='50px' /> </h3>
                <p> Nb: Vous devez essayez plusieurs fois pour que vous puissez trouvez cette face cachée . Bonne Chance </p>
                <hr />
                <img src={this.state.im} />
                <hr />
                <h5 > <u> Face :</u> {this.state.face} </h5>
                <h5 > <u> Nombre d'essais :</u> Vous avez essayez {this.state.compteur} fois </h5> <br />
                {
                    this.state.end
                    ?<div>
                        <h2 className="alert alert-success"> Bravo ! Vous avez trouvez la face cachée 👏🏻🎉 </h2>
                        <button className="btn btn-danger " onClick={this.initialiser}> Initialiser </button>
                    </div> 
                    : <button className="btn btn-danger" onClick={this.jouer}> Jouer</button>

                }
            </div>
            </div>
            </div>
        )
    }
}
