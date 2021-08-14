export class Autenticador{
    static login (autenticavel, senha){
        if(Autenticador.verificaAutenticador(autenticavel)){
        return autenticavel.autenticar(senha); 
        }
        return false;
    }

    static verificaAutenticador(autenticavel){
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function;
    }

}

export default Autenticador;