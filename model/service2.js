class service2{
    constructor(nombre){
        
        this.nombre = nombre;
        var ici = [];

    }

    initiation(){
        for(i=0;i<nombre;i++){
            this.ici[i] = i+1;
        }

        this.melange(this.ici)
    }

     melange(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    
    }



    

//----------------------------------------------------------
//Systeme
    //page


}
module.exports = service2