/**
 * 4. Implemente uma função que receba um array de números e retorne um outro array contendo somente
 * os números ímpares encontrados.
 */

function filtrarImpares(numeros) {
  const impares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      impares.push(numeros[i]);
    }
  }
  return impares;
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosImpares = filtrarImpares(numeros);
console.log(numerosImpares); // Saída: [1, 3, 5, 7, 9]
