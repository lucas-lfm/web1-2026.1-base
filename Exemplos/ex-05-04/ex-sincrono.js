// Síncrono e Bloqueante
import { readFileSync } from 'node:fs';
import { dirname } from 'node:path';

console.log("Iniciando leitura do arquivo...");

// trava a execução até ler o arquivo
const dados = readFileSync(
  `${import.meta.dirname}/arquivo.txt`,
  "UTF-8",
);

console.log("Leitura concluída:", dados);