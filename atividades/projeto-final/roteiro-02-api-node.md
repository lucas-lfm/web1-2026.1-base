# Roteiro 02 — Projeto Final de API REST com Node.js e Express: Consulta, Atualização e Remoção de Produtos

> **Contexto:** nesta segunda etapa do projeto, iremos evoluir a API REST desenvolvida anteriormente, adicionando as operações de consulta individual, atualização e remoção de produtos. Ao final desta prática, a API será capaz de realizar praticamente todas as operações básicas de um CRUD (Create, Read, Update e Delete).

---

## 📌 Instruções para Entrega

- Continue utilizando o mesmo repositório GitHub criado na Entrega 1.
- Crie uma nova release ou tag identificando esta entrega.
- Atualize o arquivo `README.md` documentando os novos endpoints implementados.
- Utilize commits frequentes e mensagens descritivas seguindo o padrão Conventional Commits.

Exemplos:

- `✨ feat: implementar busca de produto por id`
- `✨ feat: adicionar atualização de produtos`
- `✨ feat: implementar remoção de produtos`
- `🐛 fix: corrigir validação de id inexistente`
- `📚 docs: atualizar documentação dos endpoints`

---

## 🎯 Objetivos da Entrega

Ao final desta atividade, sua API deverá ser capaz de:

- Consultar um produto específico pelo ID.
- Atualizar completamente os dados de um produto.
- Remover produtos cadastrados.
- Retornar códigos HTTP adequados para cada situação.
- Tratar cenários de erro como produtos inexistentes.

---

# 1️⃣ Etapa 1: Evoluindo o Repositório de Produtos

> **🎯 Objetivo:**
>
> Adicionar ao repositório as operações necessárias para buscar, atualizar e remover produtos.

Abra o arquivo:

```text
src/repositories/productRepository.js
```

e adicione as seguintes funções:

```javascript
function findById(id) {
  const products = readAll();

  return products.find((product) => product.id === id);
}

function update(id, data) {
  const products = readAll();

  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return null;
  }

  const updatedProduct = {
    id,
    ...data,
  };

  products[index] = updatedProduct;

  writeAll(products);

  return updatedProduct;
}

function remove(id) {
  const products = readAll();

  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return false;
  }

  products.splice(index, 1);

  writeAll(products);

  return true;
}
```

Agora atualize o export do módulo:

```javascript
export default {
  findAll,
  findById,
  create,
  update,
  remove,
};
```

---

## 📌 Explicação do Código

### `findById(id)`

Busca um produto específico pelo ID informado.

```javascript
const product = products.find((product) => product.id === id);
```

Se encontrar o produto, ele será retornado.

Caso contrário, a função retornará:

```javascript
undefined;
```

---

### `update(id, data)`

Substitui completamente os dados de um produto existente.

Passos executados:

1. Localiza o produto pelo ID.
2. Verifica se ele existe.
3. Substitui os dados antigos pelos novos.
4. Salva o arquivo JSON novamente.

---

### `remove(id)`

Remove um produto da coleção.

Passos executados:

1. Localiza o índice do produto.
2. Remove utilizando `splice()`.
3. Persiste o conteúdo atualizado no arquivo.

---

# 2️⃣ Etapa 2: Implementando os Novos Endpoints no Controller

> **🎯 Objetivo:**
>
> Criar as regras de negócio responsáveis por atender as novas requisições HTTP.

Abra o arquivo:

```text
src/controllers/productController.js
```

e adicione as funções abaixo.

---

## 1. Buscar Produto por ID

```javascript
function getById(req, res) {
  const id = Number(req.params.id);

  const product = repo.findById(id);

  if (!product) {
    return res.status(404).json({
      error: "Produto não encontrado",
    });
  }

  res.json(product);
}
```

---

### 📌 Explicação

O parâmetro enviado na URL é obtido através de:

```javascript
req.params.id;
```

Por exemplo:

```http
GET /products/3
```

Resulta em:

```javascript
req.params.id === "3";
```

Como parâmetros de rota chegam como texto, utilizamos:

```javascript
Number(req.params.id);
```

para converter para número.

---

## 2. Atualizar Produto

```javascript
function update(req, res) {
  const id = Number(req.params.id);

  const { title, price, description, category, image, rating } = req.body;

  const updatedProduct = repo.update(id, {
    title,
    price: Number(price),
    description,
    category,
    image,
    rating,
  });

  if (!updatedProduct) {
    return res.status(404).json({
      error: "Produto não encontrado",
    });
  }

  res.json(updatedProduct);
}
```

---

### 📌 Explicação

O método PUT representa uma atualização completa do recurso.

Isso significa que o cliente deve enviar todos os dados do produto.

Exemplo:

```json
{
  "title": "Novo Produto",
  "price": 99.9,
  "description": "Descrição atualizada",
  "category": "eletrônicos",
  "image": "https://exemplo.com/imagem.jpg",
  "rating": {
    "rate": 4.5,
    "count": 50
  }
}
```

---

## 3. Remover Produto

```javascript
function remove(req, res) {
  const id = Number(req.params.id);

  const removed = repo.remove(id);

  if (!removed) {
    return res.status(404).json({
      error: "Produto não encontrado",
    });
  }

  res.status(204).send();
}
```

---

### 📌 Explicação

Quando a remoção é realizada com sucesso, retornamos:

```http
204 No Content
```

Esse código indica que a operação foi concluída e que não há conteúdo para retornar na resposta.

---

## Atualizando o Export

Ao final do arquivo:

```javascript
export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
```

---

# 3️⃣ Etapa 3: Criando as Novas Rotas

> **🎯 Objetivo:**
>
> Disponibilizar os novos endpoints através do sistema de rotas do Express.

Abra o arquivo:

```text
src/routes/productRoutes.js
```

e atualize para:

```javascript
import { Router } from "express";
import productController from "../controllers/productController.js";

const router = Router();

router.get("/", productController.getAll);
router.get("/:id", productController.getById);

router.post("/", productController.create);

router.put("/:id", productController.update);

router.delete("/:id", productController.remove);

export default router;
```

---

## 📌 Explicação

Agora temos cinco endpoints disponíveis:

```http
GET     /products
GET     /products/:id
POST    /products
PUT     /products/:id
DELETE  /products/:id
```

---

# 4️⃣ Etapa 4: Testando os Endpoints

> **🎯 Objetivo:**
>
> Verificar se todas as operações estão funcionando corretamente.

---

## 1. Buscar Produto por ID

Requisição:

```http
GET /products/1
```

Resposta esperada:

```json
{
  "id": 1,
  "title": "Mochila Executiva Impermeável 30L",
  "price": 189.9,
  "description": "...",
  "category": "bolsas e mochilas",
  "image": "...",
  "rating": {
    "rate": 4.2,
    "count": 318
  }
}
```

---

## 2. Buscar Produto Inexistente

Requisição:

```http
GET /products/999
```

Resposta:

```json
{
  "error": "Produto não encontrado"
}
```

Status esperado:

```http
404 Not Found
```

---

## 3. Atualizar Produto

Requisição:

```http
PUT /products/1
```

Body:

```json
{
  "title": "Mochila Executiva Premium",
  "price": 249.9,
  "description": "Nova descrição",
  "category": "bolsas e mochilas",
  "image": "https://exemplo.com/imagem.jpg",
  "rating": {
    "rate": 4.8,
    "count": 500
  }
}
```

Verifique se o arquivo:

```text
src/data/products.json
```

foi atualizado corretamente.

---

## 4. Remover Produto

Requisição:

```http
DELETE /products/1
```

Resposta esperada:

```http
204 No Content
```

Após isso, faça uma consulta:

```http
GET /products/1
```

O resultado deve ser:

```http
404 Not Found
```

---

# 🧪 Desafio Extra

Implemente validações adicionais para:

### ID inválido

```http
GET /products/abc
```

Retornar:

```http
400 Bad Request
```

---

### Preço inválido

Impedir cadastros ou atualizações com:

```json
{
  "price": -10
}
```

ou

```json
{
  "price": "abc"
}
```

---

### Título vazio

Impedir produtos com:

```json
{
  "title": ""
}
```

---

# 📋 Tabela Atualizada de Endpoints

| Método   | Rota                     | Descrição                            | Status de Sucesso |
| -------- | ------------------------ | ------------------------------------ | :---------------: |
| `GET`    | `/products`              | Lista todos os produtos ✅           |       `200`       |
| `GET`    | `/products/:id`          | Busca um produto pelo ID ✅          |       `200`       |
| `POST`   | `/products`              | Cria um novo produto ✅              |       `201`       |
| `PUT`    | `/products/:id`          | Atualiza completamente um produto ✅ |       `200`       |
| `DELETE` | `/products/:id`          | Remove um produto ✅                 |       `204`       |
| `PATCH`  | `/products/:id`          | Atualização parcial                  |       `200`       |
| `GET`    | `/products?category=...` | Filtra por categoria                 |       `200`       |
| `GET`    | `/products?search=...`   | Busca por título                     |       `200`       |

---

# 🚀 Próximas Etapas

Na próxima entrega iremos evoluir ainda mais a API implementando:

- Atualização parcial com PATCH.
- Busca por categoria.
- Busca por título.
- Filtros combinados.
- Paginação de resultados.
- Validações mais robustas.
- Middleware para tratamento centralizado de erros.
- Documentação da API.

Ao final dessas etapas, sua aplicação estará muito próxima de uma API REST utilizada em ambientes reais de produção.
