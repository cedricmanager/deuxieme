class error {

    constructor(){

    }

    static message(id){

       return  verification(id);
    }

    verification(id){

        var error;
        switch (id) {
                 case 1045: error ="Le host ne peut pas accéder "
                
                break;
                case 1045: error = " le host a un movais mot de passe "
                
                break;
        
            default: error = "error mysql qui n'est pas gérer"
                break;
        }

        return nombre;
    }
}
module.exports = error;