import express from "express";

const app = express();

const calcularImposto = (valor, taxa = 0.1) => {
  const resultado = valor * taxa;
  return resultado;
};

app.get("/", (req, res) => {
  const consulta = req.query;
  const valor = Number(consulta.valor);
  const taxa = Number(consulta.taxa);

  const resultado = calcularImposto(valor, taxa);
  res.send("O imposto é de: R$ " + resultado);
});

app.listen(3000, () => {
  console.log("Servidor rodando no endereço http://localhost:3000");
});
