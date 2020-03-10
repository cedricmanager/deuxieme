class Equipe{

    constructor(){

    }
    //--------------------------------------------------------------------
    //nom
    get nom(){
        return this.nom;
    }
    set nom(nom){
        this.nom = nom;
    }
    //-----------------------------------------------------------------------
    //pays
    get pays(){
        return this.pays;
    }
    set pays(pays){
        this.pays = pays;
    }
    //----------------------------------------------------------------------
    //fkJoueur
    get fkJoueur(){
        return this.fkJoueur;
    }
    set fkJoueur(joueur){
        this.fkJoueur = joueur;
    }
}
module.exports = Equipe;