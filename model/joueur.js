class Joueur{

    constructor(){

    }
    //-----------------------------------------------------------------
    //--nom
    get nomJoueur(){
        return this.nomJoueur;
    }
    set nomJoueur(nom){
        this.nomJoueur = nom;
    }
    //-----------------------------------------------------------------
    //--fkEquipe
    get fkEquipe(){
        return this.fkEquipe;
    }
    set fkEquipe(equipe){
        this.fkEquipe = equipe;
    }
    //-------------------------------
    //esclusion
    get esclusion(){
        return this.esclusion;
    }

    set esclusion(ici){
        this.esclusion = ici;
    }
}
module.exports = Joueur;