export class Autenticador{
    static login (funcionario, senha){
        return funcionario.senha == senha;
    }
}

export default Autenticador;