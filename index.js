import Cliente from './cliente.js';
import ContaCorrente from './Conta/ContaCorrente.js';
import ContaPoupanca from './Conta/ContaPoupança.js';
import ContaSalario from './Conta/ContaSalario.js';
import Diretor from './Funcionarios/Diretor.js';
import Funcionario from './Funcionarios/Funcionario.js';
import Gerente from './Funcionarios/Gerente.js';
import Autenticador from './Autenticador.js'

const clienteRicardo = new Cliente("Ricardo", 123456789);
const contaRicardo = new ContaCorrente(1001, clienteRicardo);
const contaPoupanca = new ContaPoupanca(50, clienteRicardo, 1001);
const contaSalario = new ContaSalario(clienteRicardo);
//contaRicardo.depositar(500);
//contaRicardo.sacar(100);
//contaPoupanca.sacar(10);
//console.log(contaPoupanca);
//console.log(contaRicardo);

//const novaConta = new Conta(0, clienteRicardo, 1003)
//console.log(novaConta);
//contaSalario.depositar(200);
//contaSalario.sacar(10);

const diretor = new Diretor("Ricardo", 10000, '016463334');
diretor.cadastrarSenha('123456');

const gerente = new Gerente('Roberto', 5000, '016433363');
const cliente = new Cliente('Alice', 2500, '456');

const clienteLogado = Autenticador.login(cliente, '456');

const estaLogado = Autenticador.login(diretor, '123456');
console.log(estaLogado);     
console.log(clienteLogado); 



