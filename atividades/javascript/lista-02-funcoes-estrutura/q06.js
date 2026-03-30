/**
 * 6. Dado um array com vários valores duplicados, crie uma função que retorne um array somente com os
 * elementos únicos encontrados no array passado como argumento
 */

function elementosUnicos(arr) {
  return new Set(arr);
}

const arrayComDuplicados = [1, 2, 3, 4, 4, 5, 5, 6];
const arrayUnico = elementosUnicos(arrayComDuplicados);
console.log(arrayUnico); // Output: Set { 1, 2, 3, 4, 5, 6 }
