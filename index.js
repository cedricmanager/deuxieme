const express = require("express")
const app = express()
const champ = require ("./model/championnat")
const mysql = require("mysql")
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'foot',
    insecureAuth : true
});

connection.connect();



//champ = new champ();
app.route('/')
    .get((req,res)=>{
        champ.anner = 2000;
        champ.temps = 1;

        console.log(champ)
       

             return new Promise((resolve,reject)=>{

             connection.query("call afficher()",(err,result)=>{
            if (err) throw err
            resolve(result)
            console.log(result)
            res.send(result)
        });
        
        })
        
      
       
       

    })
    .post((res,req)=>{

    })


app.listen(process.env.PORT || 4000,()=>{
    console.log("application en cours port 4000")
})