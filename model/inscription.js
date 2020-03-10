class Inscription{
    constructor(){
        super()
    }

 //------------
 // numero d'inscription

 get idInscription(){
    return this.idInscription;
 }

 set idInscription(ici){
     this.idInscription = ici;
 }

 //fkanner
 get fkAnner(){
     return this.fkAnner;
 }
 set fkAnner(ici){
     this.fkAnner = ici;
 }

 //fkTemps
 get fkTemps(){
     return this.fkTemps;
 }
 set fkTemps(ici){
     this.fkTemps = ici;
 }

 //----------fkEquipe
 get fkEquipe(){
     return this.fkEquipe;
 }

 set fkEquipe(ici){
     this.fkEquipe=ici;
 }

} module.exports = Inscription;