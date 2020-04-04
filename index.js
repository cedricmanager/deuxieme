const express = require("express")
const app = express()
const champ = require ("./model/championnat")
const mysql = require("mysql")
const service = require("./model/service")
const bodyParser = require("body-parser")
const cors = require("cors")
app.use(function(request, response, next){ 
 
    response.header('Access-Control-Allow-Origin', '*');     
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');     
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, ContentLength, X-Requested-With'); 
 next()
   //Handle Preflight    if (reqest.method === 'OPTIONS') {       response.status(200).send();    }    else {       next();    } 
 
});

app.use(cors({
    origin : '*'
}))
app.use(express.static('dossier'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//champ = new champ();
app.route('/ici')
    .get((req,res)=>{
        
        
      
       
       

    })
    .post((req,res)=>{
        console.log(req.body.championnat)
        if(req.body.championnat){
            console.log("ah championnat")
            service.afficherChampionnat((err,rows)=>{
                if(err) res.send(err)

                res.send(rows)
            })
        }
        else if(req.body.equipe){
            
            service.afficherEquipe((err,rows)=>{
                if(err) res.send(err)

                res.send(rows)
            })

        }
        else if(req.body.joueur){
        
        }
        else{
            res.send("probleme")
        }

    })


app.listen(process.env.PORT || 400,()=>{
    console.log("application en cours port 400")
})