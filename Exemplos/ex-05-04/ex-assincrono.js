// Assíncrono e Não Bloqueante
import { readFile } from "node:fs";

console.log("Iniciando leitura do arquivo...");

// não trava a execução
// usa callback para notificar quando terminar
readFile(`${import.meta.dirname}/arquivo.txt`, "utf-8", (err, dados) => {
  if (err) {
    console.error("Erro na leitura:", err);
    return;
  }

  console.log("Leitura concluída:", dados);
});

console.log("Término do código síncrono...");
