// Definição de funções e tipos de parâmetros

// Forma tradicional
function somar(n1, n2) {
  // const resultado = n1 + n2;
  return n1 + n2; // retorna o valor da soma dos parâmetros
}

// Função anônima / Expressão de função
const somarAnonima = function (n1, n2) {
  return n1 + n2;
};

// Função de seta (Arrow Function)
const somarArrow = (n1, n2) => {
  return n1 + n2;
};

let resultado = somar(10, 5);
console.log("Resultado da função tradicional: " + resultado);

resultado = somarAnonima(10, 5);
console.log("Resultado da função anônima: " + resultado);

resultado = somarArrow(10, 5);
console.log("Resultado da função de seta: " + resultado);

// Função que retorna o quadrado de um número
const quadrado = num => num * num; // somente uma linha, que já é o retorno
resultado = quadrado(5);
console.log("O resultado da operação é: " + resultado);

// function hello() {
//   console.log("Hello, World!");
// }

const hello = () => console.log("Hello, World!");
hello();