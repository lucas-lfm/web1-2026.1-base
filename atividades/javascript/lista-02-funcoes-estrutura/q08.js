/**
 * 8. Crie um objeto que represente uma conta bancária, com as propriedades saldo e número da conta. O 
 * objeto deve ter métodos para depositar, sacar e informar saldo. O método depositar, deve receber o 
 * valor a ser adicionado ao saldo; o método sacar deve receber o valor a ser debitado do saldo (caso 
 * haja saldo disponível); o método informar saldo deve exibir uma mensagem informando ao usuário o 
 * seu saldo atual.
 */

const contaBancaria = {
    numeroConta: '123456789',
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    },
    sacar: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        }
    },
    informarSaldo: function() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
};

// Exemplo de uso:
contaBancaria.informarSaldo();
contaBancaria.depositar(500);
contaBancaria.sacar(200);
contaBancaria.sacar(1500);
contaBancaria.informarSaldo();