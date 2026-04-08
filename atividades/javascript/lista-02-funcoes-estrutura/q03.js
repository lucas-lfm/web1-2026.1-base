/**
 * 3. Implemente uma função que receba um número e retorne seu fatorial.
 */

function fatorial(n) {
  if (n < 0) {
    return "Fatorial não definido para números negativos.";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

// Exemplo de uso:
console.log(fatorial(5)); // Saída: 120
console.log(fatorial(0)); // Saída: 1
console.log(fatorial(-3)); // Saída: "Fatorial não definido para números negativos."
