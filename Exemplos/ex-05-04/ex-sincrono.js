// Síncrono e Bloqueante
import { readFileSync } from 'node:fs';

console.log("Iniciando leitura do arquivo...");

// trava a execução até ler o arquivo
const dados = readFileSync(
  "/Users/lucas-lfm/Documents/praticas-web1-2026.1/exemplos/ex-05-04/arquivo.txt",
  "UTF-8",
);

console.log("Leitura concluída:", dados);