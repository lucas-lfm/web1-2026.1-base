<table style="width: 100%; margin: 0 auto;">
    <tr>
        <td rowspan="2"><img src="./../logo_taua_simples.png" style="width: 100px;"></td>
        <td colspan="2" align="center"><b>INSTITUTO FEDERAL DO CEARÁ - CAMPUS TAUÁ<br>
                        INFORMÁTICA PARA INTERNET</b>
        </td>
    </tr>
    <tr>
        <td><b>Professor:</b> Me. Lucas Mendes</td>
        <td><b>Disciplina:</b> Desenvolvimento Web I<br>
            <b>Turma:</b> S2
        </td>
    </tr>
    <tr>
        <td colspan="3" align="center"><strong>Atividade Prática 03</strong>: Recursos Modernos do JavaScript</td>
    </tr>
</table>

## 1. Métodos de Iteração

### **Exercício 1.1: Filtragem e Mapeamento de Logs**

Em um cenário de backend, é comum processar grandes volumes de logs para extrair informações relevantes. Você deve criar uma função que filtre e mapeie logs usando os métodos de iteração modernos.

1. Crie um array `logs` contendo objetos de log com a seguinte estrutura:

```js
{
    id: "log-001",
    nivel: "INFO",
    mensagem: "Servidor iniciado",
    timestamp: "2024-06-01T12:00:00Z"
}
```

2. Use o método `filter` para criar um novo array contendo apenas os logs de nível `ERROR`.

3. Use o método `map` para transformar os logs filtrados em mensagens formatadas usando **Template Literals** no formato:

```
[2024-06-01T12:00:00Z] [ERROR] - Servidor falhou ao iniciar.
```

4. Implemente a função para processar o array de logs e imprima os resultados.

---

### **Exercício 1.2: Agregação de Dados**

Em um backend, é comum precisar agregar dados antes de retornar uma resposta ao cliente. Por exemplo, em um sistema de loja virtual, você pode necessitar retornar o valor total de vendas a partir de um array de objetos representando as vendas.

1. Crie um array `vendas` contendo objetos de venda com a seguinte estrutura:

```js
const vendas = [
  {
    id: "venda-001",
    produto: "Produto A",
    quantidade: 2,
    precoUnitario: 50.0,
    status: "concluida",
  },
];
```
> _Adicione mais objetos no array acima, seguindo o mesmo padrão. Para a propriedade `status`, utilize os valores `iniciada`, `"concluida"` ou `"cancelada"`._

2. Use o método `reduce` para calcular o valor total das vendas concluídas, multiplicando `quantidade` por `precoUnitario` apenas para os objetos onde `status` é `"concluida"`.

3. Implemente a função para processar o array de vendas e imprima o valor total calculado.

---

## 2. Desestruturação, Rest e Spread

### **Exercício 2.1: Processamento de Resposta de API e Configurações**

Sua API recebe dados de um usuário e precisa combiná-los com configurações padrão, além de extrair informações específicas de logs.

1.  **Destructuring de Objeto:** Você recebe um objeto `usuario` contendo `{ id: 101, username: "user_a", email: "nome@ex.com", role: "user", status: "ativo" }`. Use _Destructuring_ para extrair apenas `username` e `email` em variáveis separadas.

2.  **Rest Operator em Objeto:** Use _Destructuring_ e o _Rest Operator_ para extrair `id` e agrupar as demais propriedades restantes em um novo objeto chamado `dadosComplementares`.

---

### **Exercício 2.2: Manipulação de Argumentos de Função**

Crie uma função `registrarEvento` que simula o registro de eventos no backend (ex: logs de requisição), aceitando metadados adicionais.

1.  Defina a função `registrarEvento(tipo, ...metadados)`. O _Rest Operator_ (`...`) deve ser o último parâmetro.

2.  Dentro da função, imprima o `tipo` e o array `metadados`.

3.  Chame a função com diferentes números de argumentos, demonstrando como o _Rest Operator_ agrupa os argumentos adicionais em um array.

---

### **Exercício 2.3: Sanitização de Dados de Requisição (Request Body)**

Em aplicações backend, é comum receber objetos grandes via requisições HTTP (`req.body`), contendo tanto dados esperados quanto campos extras enviados pelo cliente.

**Tarefa:**

Você deve criar uma função utilitária para preparar os dados antes de persisti-los no banco.

1.  Crie um objeto `body` que simula o corpo de uma requisição:

```js
const body = {
  id: "user-123",
  nome: "João",
  email: "joao@email.com",
  role: "admin",
  ativo: true,
  token: "abc123",
};
```

2. Implemente a função `prepararDadosUsuario(dados)`.

3. Use **Destructuring** para extrair `id`, `nome` e `email`.

4. Use o **Rest Operator** para agrupar os demais campos em `dadosExtras`.

> Esses dados podem ser ignorados ou tratados separadamente (ex: segurança, auditoria).

5. Crie um objeto `dadosPadrao` com `ativo: true`.

6. Use o **Spread Operator** para criar `dadosFinais`, combinando:

- `dadosPadrao`
- os dados extraídos
- e sobrescrevendo `ativo: false` no final

7. Retorne `dadosFinais` e imprima.

8. Explique como o **Rest** ajuda na sanitização e como o **Spread** controla prioridade.

---

## 3. Optional Chaining e Nullish Coalescing

### **Exercício 3.1: Acesso Seguro em Configurações do Servidor**

Em aplicações backend, configurações podem vir de diferentes fontes, como variáveis de ambiente (`.env`), arquivos de configuração ou serviços externos. Nem sempre todas as propriedades estarão definidas, o que pode causar erros em tempo de execução.

**Tarefa:**

1. Crie um objeto `configuracoes` simulando configurações do servidor:

```js
const configuracoes = {
  app: {
    nome: "Minha API",
  },
  cache: {
    tempoExpiracao: 0,
  },
};
```

2. Simule um segundo cenário onde a configuração de cache não existe:

```js
const configuracoes2 = {
  app: {
    nome: "Minha API",
  },
};
```

3. Use o **Optional Chaining (`?.`)** para acessar com segurança a propriedade:

```js
configuracoes.cache.tempoExpiracao;
```

Sem causar erro caso `cache` não exista.

4. Use o **Nullish Coalescing (`??`)**, operador de coalescência nula, para fornecer um valor padrão de `3600` segundos caso `tempoExpiracao` seja `null` ou `undefined`.

5. Imprima os resultados para os dois objetos (`configuracoes` e `configuracoes2`).

6. Explique:

- Por que o uso de `?.` evita erros no programa.

- A diferença entre `??` e `?.` e quando o `??` é útil.

---

## 4. Arrow Functions e Template Literals

### **Exercício 4.1: Função de Formatação de Logs**

Em um backend, é comum formatar mensagens de log para monitoramento e depuração. Você deve criar uma função que formate mensagens de log usando **Arrow Functions** e **Template Literals**.

1. Crie uma função `formatarLog` usando a sintaxe de **Arrow Function** que recebe os parâmetros `nivel`, `mensagem` e `timestamp`.

2. Use **Template Literals** para formatar a mensagem de log no seguinte formato:

```
[2024-06-01T12:00:00Z] [INFO] - Servidor iniciado com sucesso.
```

3. Implemente a função para retornar a string formatada.

4. Chame a função `formatarLog` com diferentes níveis de log (`INFO`, `ERROR`, `DEBUG`) e mensagens, e imprima os resultados.

---

### **Exercício 4.2: Função de Processamento de Dados**

Crie uma função `processarDados` que recebe um array de objetos representando requisições, e retorna um array de mensagens formatadas.

1. Use **Arrow Functions** para definir a função `processarDados`.

2. Cada objeto de requisição tem a seguinte estrutura:

```js
{
    id: "req-001",
    endpoint: "/api/usuarios",
    metodo: "GET",
    status: 200,
    timestamp: "2024-06-01T12:00:00Z"
}
```

3. A função deve retornar um array de mensagens formatadas usando **Template Literals** no formato:

```
[2024-06-01T12:00:00Z] [GET /api/usuarios] - Status: 200
```

4. Implemente a função para processar um array de requisições e imprima os resultados.

---