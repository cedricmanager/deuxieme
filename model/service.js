const mysql = require("mysql")
var error = require("./erreur")
var connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password :'',
    database : 'foot'
})

connection.connect((err)=>{
   console.log("probleme de connection"+err.code)
})



