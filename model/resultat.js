class Resultat{

    constructor(){
       this.but = 0;
    }

    get fkNomJoueur(){
        return this.fkNomJoueur;
    }
    set fkNomJoueur(nom){
        this.fkNomJoueur = nom;
    }
    get fkIdMatch(){
        return this.fkIdMatch;
    }
    set fkIdMatch(id){
        this.fkIdMatch = id;
    }
    get rouge(){
        return this.rouge;
    }
    set rouge(rouge){
        this.rouge = rouge;
    }
    get jaune(){
        return this.jaune;
    }
    set jaune(jaune){
        this.jaune= jaune;
    }
    get  but(){
        return this.but;
    }
    set but(ici){
        this.but = ici;
    }
}
module.exports = Resultat