class Match{

    constructor(){

    }

   //-----------------------
   //inscription

   get fkIdInscription(){
       return this.fkIdInscription;
   }
   set fkIdInscription(ici){
       this.fkIdInscription = ici;
   }
   //----------------------------
   //joueur equipe inscrit
    get fkInscription1(){
        return this.fkEquipe1;
    }
    set fkInscription1(equipe){
        this.fkEquipe1 = equipe;
    }
    get fkInscription2(){
        return this.fkEquipe2;
    }
    set fkInscription2(equipe){
        this.fkEquipe2 = equipe;
    }

//gagnant
    get fkInscriptionGagnant(){
        return this.fkInscriptionGagnant;
    }
    set fkInscriptionGagnant(ici){
        this.fkInscriptionGagnant=ici;
    }
    //date du match
    get dateMatch(){
        return this.fkDateMatch;
    }
    set dateMatch(ici){
        this.fkDateMatch = ici;
    }
}
module.exports = Match;