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

  class Service{
//-------------------------------------------------------
//Championnat 
    //page (1)

    afficherChampionnat(){

        return new Promise((resolve,reject)=>{

            connection.query("call championnatAfficher()",(err,rows)=>{
            if(err) reject(error.message(err.code))

                        resolve(rows)


            })
           
        })
    }

    selectionnerChampionnat(anner,parti){


    }
//-------------------------------------------------------
//equipe
    //page(2)
    afficherEquipe(){

        return new Promise ((resolve,reject)=>{

            connection.query("call equipeAfficher()",(err,rows)=>{

                if (err) reject(error.message(err.code))

                resolve(rows)
            })

        })
}

//-------------------------------------------------------
//joueur
    //page(3)
    afficherJoueur(){

        return new Promise ((resolve,reject)=>{
            connection.query("call joueurAfficher()",(err,rows)=>{
                if(err) reject(error.message(err.code))

                resolve(rows)
            })
        })
    }
    selectionnerJoueur(joueur,equipe){

        return new Promise ((resolve,reject)=>{

            connection.query("call joueurUpdate(?,?)",[joueur,equipe],(err,rows)=>{
                if (err) reject(error.message(err))

                resolve(rows)
            })
        })
    }




//---------------------------------------------------------
//Inscription
    //page(4)

    enregistrementInscription(inscription){

        return new Promise((resolve,reject)=>{

            connect.query("call inscriptionAjouter(?,?,?)",[inscription.fkAnner,inscription.fkTemps,inscription.fkEquipe],(err,rows)=>{


                if (err) reject(error.message(err.code))
                resolve(rows)
            })
        })
    }

    calculerNombreInscription(nombre){

        return new Promise((resolve,reject)=>{

            connect.query("call InscriptionNombre(?,?)",[nombre.anner,nombre.temps],(err,rows)=>{

                if(err) reject(error.message(err.code))
                resolve(rows)
            })
        })
    }
    //-------------------------------------------------------
    //match
        //page(5)



}
module.exports = Service;



