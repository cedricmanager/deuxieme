import React,{ Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
class page1 extends Component{
    constructor(props){
        super(props)

        this.demarrage = this.demarrage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        /*
        this.state = {contenue : "Bienvenue ",redirect:false}

        this.nombre = 0;
        this.result = [1,2];
        this.demarrage = this.demarrage.bind(this);
        */
       const data = new FormData();
        var request = new XMLHttpRequest();
    data.append('championnat',1);
    request.open("POST","http://localhost:400/ici")
    request.send(data)
    }

    demarrage(z){
z.preventDefault();
        const data = new FormData();
        
        data.append('championnat',1);
  
        fetch("http://localhost:400/ici",{
            method: 'POST',
            body: {'championnat':1},

        }).then((response)=>{
                response.text().then((heu)=>{

                    if(response.ok){
                        console.log(heu)
                        this.result=heu.json();
                        console.log("on cree une session avec nom")
                    }
                    else{
                        console.log("probleme la requête n'a pas fonctionné")
                    }
                })
        }).catch((err)=>{
            console.log(err)
        })
    }

    changeMent(e){
        e.preventDefault();


    }
    render(){
        return(
             
            <div>
                    <Router>
        {/*this.result.map((result)=> result)*/}

            <Link> <a href="/" onClick={this.demarrage}>
              <div class="container p-3 dg-dark text-white">
                
ici
            
              </div></a>
            </Link>

                    
          </Router></div>
        )
    }
}
export default page1