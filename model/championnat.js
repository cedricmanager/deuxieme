class Championnat{

    constructor(){
        
    }
//-------------------------------------------------------------------------------
//-- Anner
    get anner() {
        return this.anner;
    }
    set anner(anner){
        this.anner = anner;
    }
//--------------------------------------------------------------------------------
//----Temps
    get temps(){
        return this.temps;
    }
    set temps(temp){
        this.temps = temp;
    }
//--------------------------------------------------------------------------------
//----Nom
    get nom(){
        return this.nom;
    }
    set nom(nom){
        this.nom = nom;
    }

    
}
module.exports = Championnat;