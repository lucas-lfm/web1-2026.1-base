/**
 * 1. Escreva uma função que receba dois números e um caractere como argumentos. O caractere recebido 
 * informa que tipo de operação deve ser realizada. Por exemplo, ao receber o caractere “+”, a função 
 * deve calcular a soma dos números passados como argumento e retornar o resultado. Use “+” para 
 * soma, “-” para subtração, “/” para divisão e “*” para multiplicação.
 */

function calcular(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Erro: Divisão por zero';
            }
            return num1 / num2;
        default:
            return 'Operador inválido';
    }
}

// Exemplo de uso:
console.log(calcular(10, 5, '+')); // 15
console.log(calcular(10, 5, '-')); // 5
console.log(calcular(10, 5, '*')); // 50
console.log(calcular(10, 5, '/')); // 2
console.log(calcular(10, 0, '/')); // Erro: Divisão por zero
console.log(calcular(10, 5, '^')); // Operador inválido