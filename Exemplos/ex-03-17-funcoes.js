const calcularImposto = (valor, taxa = 0.1) => {
  const resultado = valor * taxa;
  return resultado;
};

let res = calcularImposto(50, 0.13);
console.log(res);
