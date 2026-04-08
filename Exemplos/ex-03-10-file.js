import fs from "node:fs";

function calcular(n1, n2, op) {
  let resultado;

  if (op == "-") {
    resultado = n1 - n2;
  } else if (op == "+") {
    resultado = n1 + n2;
  } else if (op == "/") {
    resultado = n1 / n2;
  } else if (op == "*") {
    resultado = n1 * n2;
  } else {
    console.log("Operação inválida");
    return;
  }

  fs.appendFileSync("teste.txt", "O valor resultante da operação foi: " + resultado + "\n");
  
  return resultado;
}

// calcular(10, 20, "*");
// calcular(5, 23, "-");
// calcular(12, 24, "/");
// calcular(50, 32, "+");

const res = calcular(10, 20, "+");
console.log(res); // 30