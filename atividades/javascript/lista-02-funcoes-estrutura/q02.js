/**
 * 2. Escreva uma função que receba uma quantidade não específica (aleatória) de números como
 * argumentos e retorne o produtório dos números passados.
 */

// A função 'produtorio' recebe um número variável de argumentos usando o operador rest (...numeros).
function produtorio(...numeros) {
  let resultado = 1;
  for (let i = 0; i < numeros.length; i++) {
    resultado *= numeros[i];
  }
  return resultado;
}

// Exemplo de uso:
console.log(produtorio(2, 3, 4)); // 24
console.log(produtorio(5, 6)); // 30
console.log(produtorio(7)); // 7
