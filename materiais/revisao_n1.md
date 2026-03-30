<table style="width: 100%; margin: 0 auto;">
    <tr>
        <td rowspan="2"><img src="./logo_taua_simples.png" style="width: 200px; margin: 0 auto"></td>
        <td colspan="2" align="center"><b>INSTITUTO FEDERAL DO CEARÁ - CAMPUS TAUÁ<br>
                        TÉCNICO SUBSEQUENTE EM INFORMÁTICA PARA INTERNET</b>
        </td>
    </tr>
    <tr>
        <td><b>Professor:</b> Me. Lucas Mendes</td>
        <td><b>Disciplina:</b> Desenvolvimento Web I<br>
            <b>Turma:</b> S2
        </td>
    </tr>
    <tr>
        <td colspan="3" align="center"><strong>Revisão N1</strong></td>
    </tr>
    <tr>
        <td colspan="3">Revisão do conteúdo parcial trabalhado na N1 da disciplina de Desenvolvimento Web I, curso Técnico Subsequente em Informática para Internet.</td>
    </tr>
</table>

# 📘 Revisão – Fundamentos de Desenvolvimento Web I

> 📌 Material de revisão estruturado para consolidar os principais conceitos de:
>
> - Git/GitHub
> - Introdução ao JavaScript
> - Estruturas de Dados e Objetos em JavaScript
> - Ambiente de Execução (Navegador vs Node.js)

---

# 🎯 1. Objetivos de Aprendizagem

Ao final desta revisão, você deve ser capaz de:

- Compreender o propósito do versionamento de código com Git e GitHub
- Escrever programas básicos em JavaScript
- Utilizar variáveis, operadores e estruturas de controle
- Criar e manipular funções
- Trabalhar com arrays, objetos, sets e maps
- Entender a diferença entre executar JS no navegador e no Node.js

---

# 🔧 2. Git e GitHub (Versionamento de Código)

## 📌 Conceito

Versionamento é uma técnica para gerenciar alterações no código ao longo do tempo.

![Git - Visão Geral](./img/git-1.png)

### Por que usar?

- Evitar perda de código
- Trabalhar em equipe
- Manter histórico de versões
- Reverter alterações

## 🧱 Git vs GitHub

- **Git** → ferramenta de versionamento (local):
  - Controla mudanças no código
  - Funciona no seu computador
  - Permite criar branches, commits, etc.
  - Geralmente usado via terminal de comandos, mas também tem interfaces gráficas
- **GitHub** → plataforma de hospedagem de repositórios (remoto):
  - Armazena repositórios online
  - Facilita colaboração e compartilhamento
  - Oferece recursos como pull requests, issues, etc.
  - Serve como um portfólio para desenvolvedores mostrarem seus projetos

## 📂 Repositório

- Local onde o código é armazenado
- Pode ser:
  - Local (Pasta no seu computador)
  - Remoto (Plataforma como GitHub)

## ⚙️ Comandos básicos

```bash
git init       # inicia repositório
git add .      # adiciona arquivos
git commit -m "mensagem"
git status     # verifica estado
git log        # histórico
```

## Estrutura do Git

A arquitetura típica de um repositório Git inclui:

- **Working Directory**: onde você edita os arquivos
- **Staging Area**: onde você prepara os arquivos para commit
- **Repository**: onde os commits são armazenados localmente
- **Remote**: onde os repositórios são hospedados (ex: GitHub)

Alguns comandos realizam uma transição entre essas áreas:

- `git add`: move arquivos do Working Directory para o Staging Area
- `git commit`: move arquivos do Staging Area para o Repository
- `git push`: move commits do Repository local para o Remote

![Fluxo de Trabalho do Git](./img/fluxo-git.png)

## 🌿 Branches

- Permitem trabalhar em funcionalidades separadas
- Evitam conflitos diretos

![Ramificações em um repositório Git](./img/ramificacoes-git.png)

Comandos relacionados:

```bash
git branch        # cria, lista, exclui branches
git checkout <branch>  # muda para um branch
git merge <branch>    # mescla um branch com o atual
```

---

# 💡 3. Introdução ao JavaScript

## 📌 O que é JavaScript?

- Linguagem de programação da Web
- Interpretada e baseada em objetos
- Executada no navegador ou em um servidor (Node.js)

## ⚙️ Onde usar?

- Manipular HTML e CSS
- Criar interações
- Validar formulários
- Desenvolver backend

---

# 🧾 4. Sintaxe Básica

## 🧱 Statements

Instruções formadas por:

- valores
- operadores
- expressões
- palavras reservadas

```js
let a = 5;
let b = 6;
let c = a + b;
```

---

# 📦 5. Variáveis

## Tipos de declaração

```js
var x = 10; // antigo
let y = 20; // mutável
const z = 30; // constante
```

> 📌 **Importante:**
>
> - `var` tem escopo de função e pode causar problemas de hoisting e vazamento de variáveis, por isso é recomendado evitar seu uso.
> - `const` e `let` têm escopo de bloco e são mais seguros para uso geral, pois não apresentam os mesmos problemas que `var`.
> - `const` é imutável, ou seja, seu valor não pode ser reatribuído após a inicialização, enquanto `let` permite reatribuição.
> - _Exemplos:_
>
> ```js
> const PI = 3.14; // valor constante
> PI = 3.1415; // erro: não é possível reatribuir
> let contador = 0; // valor mutável
> contador = 1; // permitido
> ```

## 📌 Boas práticas

- Prefira `const`, principalmente para arrays, objetos e funções
- Use `let` quando necessário
- Evite `var`

---

# 🔑 6. Palavras Reservadas

Exemplos importantes:

- `if`, `else`, `else if`
- `switch`, `case`, `default`
- `for`, `while`
- `function`, `return`
- `const`, `let`, `var`

---

# ➕ 7. Operadores

## Aritméticos

```js
+soma - (((subtração * multiplicação) / divisão) % módulo);
```

## Comparação

```js
== (igualdade)
=== (igualdade estrita)
!= (desigualdade)
!== (desigualdade estrita)
> (maior que)
< (menor que)
```

> 📌 **Importante:**
>
> - `==` compara apenas os valores, realizando coerção de tipos, o que pode levar a resultados inesperados.
> - `===` compara tanto o valor quanto o tipo, garantindo uma comparação mais precisa e evitando erros comuns relacionados à coerção de tipos.
>   _Exemplo:_
>
> ```js
> 0 == false; // true (coerção de tipos)
> 0 === false; // false (tipos diferentes)
>
> "5" == 5; // true (coerção de tipos)
> "5" === 5; // false (tipos diferentes)
> ```

## Lógicos

```js
&& (e, os dois operandos precisam ser verdadeiros)
|| (ou, pelo menos um dos operandos precisa ser verdadeiro)
! (não, inverte o valor lógico)
```

Exemplo:

```js
const a = true;
const b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
```

---

# 🔀 8. Estruturas de Controle

## Condicional

```js
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

```js
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  default:
    console.log("Outro dia");
}
```

## Repetição

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

```js
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
```

---

# 🔁 9. Funções

## Definição

```js
function saudacao(nome) {
  return "Olá, " + nome;
}
```

## Conceito

- Blocos reutilizáveis de código
- Podem receber parâmetros
- Podem retornar valores

## Tipos

- Função tradicional

```js
function saudacao(nome) {
  return "Olá, " + nome;
}
```

- Função anônima

```js
const saudacao = function (nome) {
  return "Olá, " + nome;
};
```

- Arrow function

```js
const saudacao = (nome) => {
  return "Olá, " + nome;
};
```

> 📌 Arrow functions são mais concisas. Por exemplo, se a função possuir apenas um parâmetro e somente uma linha em seu corpo (já sendo a instrução de retorno), ela pode ser expressa da seguinte forma:

```js
const saudacao = (nome) => "Olá, " + nome;

const resultado = saudacao("Maria");

console.log(resultado); // Saída: "Olá, Maria"
```

## Parâmetros e Argumentos

- Parâmetros: variáveis definidas na declaração da função
- Argumentos: valores passados para a função quando ela é chamada

```js
function soma(a, b) {
  // a e b são parâmetros
  return a + b;
}

const resultado = soma(5, 10); // 5 e 10 são argumentos
console.log(resultado); // Saída: 15
```

**Rest Parameters**: permitem que uma função aceite um número indefinido de argumentos como um array.

```js
function exibirNomes(...nomes) {
  for (const nome of nomes) {
    console.log(nome);
  }
}

exibirNomes("João", "Maria", "Pedro"); // Saída: "João", "Maria", "Pedro"
```

---

# 🧱 10. Estruturas de Dados

---

## 📚 Arrays

```js
const carros = ["Ford", "BMW", "Fiat"];
```

📌 Arrays armazenam múltiplos valores em uma única variável

- Para acessar um elemento específico, usamos a sintaxe de colchetes com o índice do elemento desejado. Lembre-se de que os índices em JavaScript começam em 0, ou seja, o primeiro elemento do array está no índice 0, o segundo no índice 1, e assim por diante.

```js
const carros = ["Ford", "BMW", "Fiat"];
console.log(carros[0]); // Saída: "Ford"
console.log(carros[1]); // Saída: "BMW"
console.log(carros[2]); // Saída: "Fiat"
```

### Operações

```js
carros.push("Honda"); // adiciona no final
carros.unshift("Chevrolet"); // adiciona no início
carros.pop(); // remove do final
carros.shift(); // remove do início
carros.length; // retorna o número de elementos
```

### Iteração

- Usando `for` tradicional:

```js
for (let i = 0; i < carros.length; i++) {
  console.log(carros[i]);
}
```

- Usando `for...of`:

```js
for (const c of carros) {
  console.log(c);
}
```

- Usando `forEach`:

```js
carros.forEach((c) => console.log(c));
```

- Usando `map` para criar um novo array:

```js
const carrosEmMaiusculo = carros.map((c) => c.toUpperCase());
console.log(carrosEmMaiusculo); // Saída: ["FORD", "BMW", "FIAT"]
```

> ⚠️ O método `map` é utilizado para transformar cada elemento de um array em um novo valor, criando um novo array com os resultados. Ele não modifica o array original.

---

## 🧍 Objetos

```js
const pessoa = {
  nome: "João",
  idade: 30,
};
```

### Acesso

```js
pessoa.nome; // usando notação de ponto
pessoa["idade"]; // usando notação de colchetes
```

### Métodos

- Métodos são funções associadas a objetos que realizam ações relacionadas ao objeto.
- Eles permitem que o objeto execute comportamentos específicos, utilizando suas próprias propriedades, por exemplo.

```js
const pessoa = {
  nome: "João",
  sobrenome: "Silva",
  // método para retornar o nome completo
  nomeCompleto: function () {
    return this.nome + " " + this.sobrenome;
  },
};
```

📌 **_Objetos representam entidades com propriedades e ações_**

---

## 🔁 Sets

```js
const letras = new Set(["a", "b", "c"]);
```

- Valores únicos
- Não permite duplicatas

---

## 🗺️ Maps

```js
const mapa = new Map();
mapa.set("nome", "João");
mapa.set("idade", 30);
mapa.get("nome"); // retorna "João"
mapa.has("idade"); // retorna true, pois o método has verifica se a chave existe no mapa
```

- Estrutura chave-valor
- Chaves podem ser de qualquer tipo

---

# 🌐 11. Ambiente de Execução (Runtime)

## 🖥️ Navegador

- Executa JS no cliente
- Possui APIs como:
  - DOM
  - alert()
  - document

## ⚙️ Node.js

- Executa JS no servidor
- Permite:
  - acesso a arquivos
  - criação de APIs
  - execução fora do navegador

## ⚖️ Diferença principal

| Navegador      | Node.js         |
| -------------- | --------------- |
| DOM disponível | Sem DOM         |
| Foco em UI     | Foco em backend |
| Usa window     | Usa global      |

## Métodos e APIs

### Navegador

- `alert()`: exibe uma caixa de diálogo com uma mensagem
- `document.getElementById()`: seleciona um elemento do DOM pelo ID
- `prompt()`: solicita entrada do usuário

### Node.js

- `fs`: módulo para manipulação de arquivos
  - `readFile()`: lê o conteúdo de um arquivo
  - `writeFile()`: escreve dados em um arquivo
- `http`: módulo para criar servidores web
  - `createServer()`: cria um servidor HTTP
  - `listen()`: inicia o servidor para escutar requisições
- `process`: objeto global para informações do processo
  - `env`: acesso a variáveis de ambiente

---

# 🧪 12. Exercícios de Fixação

## 🟢 Básico

1. Declare três variáveis e exiba a soma
2. Crie uma função que retorne o dobro de um número
3. Use um loop para imprimir os números de 1 a 10

## 🟡 Intermediário

4. Crie um array de nomes e percorra, **com o `for...of`**, exibindo no console
5. Faça o mesmo que o exercício anterior, mas usando o método `forEach`
6. Crie um objeto "aluno" com nome e nota e um método para calcular se passou ou não (nota >= 6)

## 🔴 Avançado

7. Crie uma função que recebe uma quantidade aleatória de números e retorna apenas números pares
8. Crie um programa que simule um sistema de cadastro usando um array para armazenar os usuários (objetos com nome e email) e permita adicionar, listar e buscar usuários por nome.
9. Crie um programa que utilize o módulo `fs` do Node.js para ler um arquivo de texto e exibir seu conteúdo no console.
10. Crie um programa que utilize o módulo `http` do Node.js para criar um servidor web simples que responda com "Olá, Mundo!" para todas as requisições.

---

# 🧠 13. Checklist de Revisão

✔ Entendo o que é versionamento    
✔ Sei usar comandos básicos do Git     
✔ Consigo declarar variáveis em JS     
✔ Sei usar estruturas de controle      
✔ Sei criar funções        
✔ Consigo trabalhar com arrays e objetos       
✔ Entendo a diferença entre Node e navegador       

---
