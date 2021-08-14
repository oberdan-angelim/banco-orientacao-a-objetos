import Cliente from '../Cliente.js'

// Classe Abstrata
export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Conta: Não é possível criar uma instância de Conta Diretamente! Utilize uma outra classe de conta para ser instanciada. new ContaCorrente ou new ContaPoupanca");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente
        this._agencia = agencia
    }
    
    get cliente(){
        return this._cliente;
    }

    get agencia(){
        return this._agencia;
    }

    get saldo(){
    return this._saldo;
    }

    set cliente(novoCliente){
        if(cliente instanceof Cliente){
        this._cliente = novoCliente;
        }
    }

    depositar(valor){
        if(valor <= 0){return;} 
        this._saldo += valor;           
    }

    sacar(valor){ 
       throw new Error("O método sacar da conta é abstrato. Você deve sobrescrever esse metódo!")
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado; 
            return valorSacado;
            }
        return 0;   
    }
    
    transferir(valor, contaDestino){
      const  valorSacado = this.sacar(valor);
      contaDestino.depositar(valorSacado); 
    }

}

export default Conta;