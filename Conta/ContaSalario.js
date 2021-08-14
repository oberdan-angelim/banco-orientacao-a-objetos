import Conta from './Conta.js';

export class ContaSalario extends Conta{

    constructor(cliente){
        super(0, cliente, 1005);
 }   

    sacar(valor){
        let taxa = 1.001;
        this._sacar(valor, taxa);
    }

}

export default ContaSalario;