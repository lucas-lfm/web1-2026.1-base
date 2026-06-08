# Roteiro 01 — Projeto Final de API REST com Node.js e Express: CRUD de Produtos

> **Contexto:** este roteiro inicia a implementação de uma API REST inspirada na [FakeStore API](https://fakestoreapi.com), com o recurso **Produtos**, persistência simulada em arquivo JSON e sem banco de dados.

---

## 📌 Instruções para Entrega

- O projeto deve ser entregue em um repositório público no GitHub.
- O repositório deve conter um `README.md` com instruções claras de como rodar o projeto e testar os endpoints.
- O código deve estar organizado e seguir boas práticas de desenvolvimento.
- Utilize commits frequentes e mensagens de commit descritivas para documentar o progresso do desenvolvimento. Siga o padrão `conventional commits` para facilitar a leitura do histórico. Exemplos:
  - `✨ feat: adicionar endpoint de listagem de produtos`
  - `🐛 fix: corrigir bug na função de criação de produto`
  - `📚 docs: atualizar README com instruções de uso`
- Você pode usar o template de `README` fornecido abaixo para facilitar a documentação do seu projeto.

```markdown
# InfoCom API - CRUD de Produtos

## Descrição

## Tecnologias Utilizadas

## Endpoints

## Como Rodar o Projeto

## Testando os Endpoints

## Considerações Finais
```

---

## Pré-requisitos

- Node.js ≥ 18 instalado
- `npm` disponível no terminal
- Editor de código (VS Code recomendado)

---

## Estrutura de Pastas

```
infocom-api/
├── src/
│   ├── data/
│   │   └── products.json       # "banco de dados" em arquivo
│   ├── repositories/
│   │   └── productRepository.js
│   ├── controllers/
│   │   └── productController.js
│   └── routes/
│       └── productRoutes.js
├── server.js
└── package.json
```

---

## 1️⃣ Etapa 1: Estrutura Inicial

> **🎯 Objetivo:**
> - Criar um servidor Express funcional e validar que ele está respondendo requisições HTTP.

### 1. Inicialização do Projeto

Crie uma pasta para o projeto (`infocom-api`), abra ela no VS Code e execute os seguintes comandos no terminal para configurar o ambiente:

```bash
npm init -y
npm install express
npm install -D nodemon
```

> **Dependências utilizadas:** `express`, para criar a API de forma simples, e `nodemon`, para reinicializar o servidor automaticamente durante o desenvolvimento.

No arquivo `package.json` gerado, adicione a chave `"type": "module"` e configure os scripts para iniciar o servidor em modo normal e de desenvolvimento:

```json
{
  "name": "infocom-api",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

> **Por que isso importa:** sem `"type": "module"`, o Node.js interpreta `.js` como CJS por padrão. Com essa chave, `import`/`export` funcionam nativamente.

Agora execute `npm run dev` para iniciar o servidor em modo de desenvolvimento. Ele irá reiniciar automaticamente sempre que você salvar mudanças no código.

---

### 2. Estrutura inicial do Servidor

Crie o arquivo `server.js` na raiz do projeto e adicione o seguinte código para configurar o servidor Express:

```javascript
import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'InfoCom API no ar 🚀'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

**Teste**

1. Caso ainda não tenha iniciado o servidor, execute `npm run dev`.
2. Abra o navegador ou use uma ferramenta como Postman para acessar `http://localhost:3000/`.
3. Você deve ver a resposta JSON: `{"message":"InfoCom API no ar 🚀"}`.

---

## 2️⃣ Etapa 2: Criando o "Banco de Dados" com JSON

> **🎯 Objetivo:**
> - Simular um banco de dados usando um arquivo JSON para armazenar os produtos.

### 1. Criando o arquivo de dados

Dentro da pasta `src/data`, crie um arquivo chamado `products.json` com o seguinte conteúdo inicial:

```json
[
  {
    "id": 1,
    "title": "Mochila Executiva Impermeável 30L",
    "price": 189.90,
    "description": "Mochila resistente à água com compartimento acolchoado para notebook de até 15,6 polegadas, alças ergonômicas e porta USB lateral.",
    "category": "bolsas e mochilas",
    "image": "https://images.unsplash.com/photo-1505308144658-03c69861061a",
    "rating": { "rate": 4.2, "count": 318 }
  },
  {
    "id": 2,
    "title": "Anel Feminino Folheado a Ouro 18k com Zircônia",
    "price": 1290.00,
    "description": "Anel delicado folheado a ouro 18k com pedra de zircônia cúbica, acabamento antialérgico e embalagem para presente inclusa.",
    "category": "joias e acessórios",
    "image": "https://images.unsplash.com/photo-1629118639934-2b241503956c",
    "rating": { "rate": 4.7, "count": 203 }
  }
]
```

> 📌 **Por que usar um arquivo JSON?**
>
> - Neste momento ainda não estamos trabalhando com bancos de dados reais.
>
> - O arquivo JSON será utilizado apenas para simular a persistência dos dados e permitir o foco nos conceitos de API REST e CRUD.

---

## 3️⃣ Etapa 3: Repositório de Produtos

> **🎯 Objetivo:**
> - Criar um módulo para gerenciar a leitura e escrita dos produtos no arquivo JSON, encapsulando a lógica de acesso aos dados.

### 1. Criando o Product Repository

Dentro da pasta `src/repositories`, crie um arquivo chamado `productRepository.js` e adicione o seguinte código:

```javascript
import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const DB_PATH = path.join(__dirname, '../data/products.json');

function readAll() {
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(raw);
}

function writeAll(products) {
  fs.writeFileSync(DB_PATH, JSON.stringify(products, null, 2), 'utf-8');
}

function findAll() {
  return readAll();
}

function create(data) {
  const products = readAll();

  const lastId =
    products.length > 0
      ? products[products.length - 1].id
      : 0;

  const newProduct = {
    id: lastId + 1,
    ...data
  };

  products.push(newProduct);

  writeAll(products);

  return newProduct;
}

export default {
  findAll,
  create
};
```

> **📌 Explicação do código:**
>- `readAll()`: lê o conteúdo do arquivo JSON e retorna um array de produtos.
>- `writeAll(products)`: recebe um array de produtos e escreve no arquivo JSON, formatando com indentação para melhor legibilidade.
>- `findAll()`: função pública que retorna todos os produtos.
>- `create(data)`: recebe um objeto com os dados do produto (sem `id`), gera um novo `id` incremental, adiciona o produto ao array e salva no arquivo.

---

## 4️⃣ Etapa 4: Implementando Cadastro e Listagem de Produtos

> **🎯 Objetivo:**
> - Criar um endpoint para cadastrar novos produtos, utilizando o repositório para persistir os dados no arquivo JSON.

### 1. Criando o Product Controller

Dentro da pasta `src/controllers`, crie um arquivo chamado `productController.js` e adicione o seguinte código:

```javascript
import repo from '../repositories/productRepository.js';

// GET /products
function getAll(req, res) {
  const products = repo.findAll();
  res.json(products);
}

// POST /products
function create(req, res) {
  const { title, price, description, category, image } = req.body;

  if (!title || !price) {
    return res.status(400).json({ error: 'Título e preço são obrigatórios' });
  }

  const newProduct = repo.create({
    title,
    price: Number(price),
    description: description || '',
    category: category || '',
    image: image || '',
    rating: {
      rate: 0,
      count: 0
    }
  });

  res.status(201).json(newProduct);
}

export default {
  getAll,
  create
};
```

> **📌 Explicação do código:**
>- `getAll(req, res)`: obtém todos os produtos do repositório e retorna como JSON.
>- `create(req, res)`: recebe os dados do produto no corpo da requisição,valida os campos obrigatórios (`title` e `price`), cria um novo produto usando o repositório e retorna o produto criado com status 201.

---

### 2. Criando as Rotas de Produtos

Dentro da pasta `src/routes`, crie um arquivo chamado `productRoutes.js` e adicione o seguinte código:

```javascript
import { Router }           from 'express';
import productController from '../controllers/productController.js';

const router = Router();

router.get('/', productController.getAll);
router.post('/', productController.create);

export default router;
```

> **📌 Explicação do código:**
>- `router.get('/', productController.getAll)`: define uma rota GET para `/` que chama a função `getAll` do controller.
>- `router.post('/', productController.create)`: define uma rota POST para `/` que chama a função `create` do controller.

---

### 3. Integrando as Rotas no Servidor

Abra o arquivo `server.js` e importe as rotas de produtos, adicionando-as ao middleware do Express:

```javascript
import express from 'express';
import productRoutes from './src/routes/productRoutes.js';

const app = express();
app.use(express.json());
app.use('/products', productRoutes);

const PORT = 3000;

// Rota raiz para health check
app.get('/', (req, res) => {
  res.json({
    message: 'InfoCom API no ar 🚀'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

> **📌 Explicação do código:**
>- `app.use('/products', productRoutes)`: todas as rotas definidas em `productRoutes` agora estarão disponíveis sob o caminho `/products`.

---

### 4. Testando os Endpoints

1. **Listar Produtos:**
   - Faça uma requisição GET para `http://localhost:3000/products`.
   - Você deve receber um array com os produtos definidos no `products.json`.

2. **Cadastrar Produto:**
    - Faça uma requisição POST para `http://localhost:3000/products` com o seguinte corpo JSON:
   ```json
   {
     "title": "Camiseta Estampada Unissex",
     "price": 49.90,
     "description": "Camiseta de algodão com estampa moderna, disponível em várias cores e tamanhos.",
     "category": "roupas",
     "image": "https://images.unsplash.com/photo-1520975917360-9c8b1e5f1a2b"
   }
   ```
    - Você deve receber a resposta com o produto criado, incluindo um `id` gerado automaticamente.

---

## Próximas Etapas

- Implementar endpoints para atualizar e deletar produtos (PUT, PATCH e DELETE).
- Implementar endpoint para buscar um produto específico por ID (GET /products/:id).
- Implementar funcionalidade de busca e filtragem de produtos por categoria.
- Adicionar validação mais robusta e tratamento de erros.
- Trocar a persistência em arquivo por um banco de dados real (ex: SQLite, PostgreSQL).
- Testar a API a partir de um cliente frontend simples.

**Tabela de Endpoints:**

> Abaixo estão listados todos os endpoints, já implementados e a serem implementados:

| Método   | Rota              | Descrição                          | Status de sucesso  |
|----------|-------------------|------------------------------------|:------------------:|
| `GET`    | `/products`       | Lista todos os produtos ✅         | `200` (OK)         |
| `GET`    | `/products/:id`   | Retorna um produto pelo ID         | `200` (OK)         |
| `POST`   | `/products`       | Cria um novo produto ✅            | `201` (Created)    |
| `PUT`    | `/products/:id`   | Substitui completamente o produto  | `200` (OK)         |
| `PATCH`  | `/products/:id`   | Atualiza campos específicos        | `200` (OK)         |
| `DELETE` | `/products/:id`   | Remove o produto                   | `204` (No Content) |
| `GET`    | `/products?category=...` | Filtra produtos por categoria       | `200` (OK)         |
| `GET`    | `/products?search=...`   | Busca produtos por título           | `200` (OK)         |