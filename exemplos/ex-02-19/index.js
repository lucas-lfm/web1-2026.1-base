import { input } from '@inquirer/prompts';

const nome = await input({ message: 'Informe seu nome:' });
const idade = await input({ message: 'Informe sua idade:' });
const altura = Number(await input({ message: 'Informe sua altura (em cm):' }));

console.log(typeof altura);

console.log(`${nome}, ${idade} anos, ${altura / 100} m de altura.`);