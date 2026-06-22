# Roteiro 03 — Projeto Final de API REST com Node.js e Express: Atualização Parcial e Filtros de Consulta

> **Contexto:** nesta terceira etapa do projeto, iremos evoluir ainda mais a API REST implementando recursos muito comuns em aplicações reais: atualização parcial de dados utilizando o método HTTP PATCH e mecanismos de consulta com filtros por categoria e busca textual por título.
>
> Ao final desta prática, sua API estará preparada para oferecer consultas mais flexíveis e atualizações mais eficientes, aproximando-se do comportamento encontrado em APIs profissionais.

---

## 📌 Instruções para Entrega

* Continue utilizando o mesmo repositório GitHub das entregas anteriores.
* Crie uma nova release ou tag identificando esta entrega.
* Atualize o arquivo `README.md` documentando os novos endpoints e funcionalidades.
* Utilize commits frequentes e mensagens descritivas seguindo o padrão Conventional Commits.

Exemplos:

* `✨ feat: implementar atualização parcial de produtos`
* `✨ feat: adicionar filtro por categoria`
* `✨ feat: implementar busca por título`
* `🐛 fix: corrigir busca com letras maiúsculas`
* `📚 docs: atualizar documentação da API`

---

## 🎯 Objetivos da Entrega

Ao final desta atividade, sua API deverá ser capaz de:

* Atualizar parcialmente um produto utilizando PATCH.
* Filtrar produtos por categoria.
* Buscar produtos pelo título.
* Combinar filtros utilizando Query Parameters.
* Retornar códigos HTTP apropriados.
* Continuar utilizando persistência em arquivo JSON.

---

# 1️⃣ Etapa 1: Evoluindo o Repositório de Produtos

> **🎯 Objetivo:**
>
> Adicionar funções responsáveis pela atualização parcial e pelas consultas filtradas.

Abra o arquivo:

```text
src/repositories/productRepository.js
```

e adicione as funções abaixo.

---

## Atualização Parcial

```javascript
function patch(id, data) {
  const products = readAll();

  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return null;
  }

  const updatedProduct = {
    ...products[index],
    ...data,
    id,
  };

  products[index] = updatedProduct;

  writeAll(products);

  return updatedProduct;
}
```

---

## Buscar por Categoria

```javascript
function findByCategory(category) {
  const products = readAll();

  return products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );
}
```

---

## Buscar por Título

```javascript
function searchByTitle(search) {
  const products = readAll();

  return products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
}
```

---

## Atualizando o Export

Ao final do arquivo:

```javascript
export default {
  findAll,
  findById,
  findByCategory,
  searchByTitle,
  create,
  update,
  patch,
  remove,
};
```

---

## 📌 Explicação do Código

### `patch(id, data)`

Diferente do método PUT, o PATCH altera apenas os campos enviados pelo cliente.

Exemplo:

Produto atual:

```json
{
  "id": 1,
  "title": "Notebook",
  "price": 3500
}
```

Requisição:

```json
{
  "price": 4000
}
```

Resultado:

```json
{
  "id": 1,
  "title": "Notebook",
  "price": 4000
}
```

Observe que apenas o campo informado foi alterado.

---

### `findByCategory(category)`

Retorna apenas os produtos pertencentes à categoria informada.

---

### `searchByTitle(search)`

Realiza uma busca textual utilizando o método:

```javascript
includes()
```

permitindo encontrar palavras ou trechos dentro do título.

---

# 2️⃣ Etapa 2: Implementando os Novos Endpoints no Controller

> **🎯 Objetivo:**
>
> Criar as regras de negócio responsáveis por processar as novas requisições.

Abra o arquivo:

```text
src/controllers/productController.js
```

---

## Atualizar Parcialmente um Produto

```javascript
function patch(req, res) {
  const id = Number(req.params.id);

  const updatedProduct = repo.patch(id, req.body);

  if (!updatedProduct) {
    return res.status(404).json({
      error: "Produto não encontrado",
    });
  }

  res.json(updatedProduct);
}
```

---

## Atualizando a Consulta de Produtos

Substitua a função atual `getAll()` pela seguinte versão:

```javascript
function getAll(req, res) {
  const { category, search } = req.query;

  if (category) {
    const products = repo.findByCategory(category);

    return res.json(products);
  }

  if (search) {
    const products = repo.searchByTitle(search);

    return res.json(products);
  }

  const products = repo.findAll();

  res.json(products);
}
```

---

## 📌 Explicação

Os Query Parameters são enviados após o símbolo `?`.

Exemplo:

```http
GET /products?category=eletrônicos
```

Nesse caso:

```javascript
req.query.category;
```

resultará em:

```javascript
"eletrônicos"
```

---

Outro exemplo:

```http
GET /products?search=mochila
```

resultará em:

```javascript
req.query.search;
```

---

## Atualizando o Export

Ao final do arquivo:

```javascript
export default {
  getAll,
  getById,
  create,
  update,
  patch,
  remove,
};
```

---

# 3️⃣ Etapa 3: Criando a Nova Rota PATCH

> **🎯 Objetivo:**
>
> Disponibilizar a atualização parcial através do sistema de rotas do Express.

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

router.patch("/:id", productController.patch);

router.delete("/:id", productController.remove);

export default router;
```

---

## 📌 Explicação

Agora temos seis endpoints disponíveis:

```http
GET     /products

GET     /products/:id

POST    /products

PUT     /products/:id

PATCH   /products/:id

DELETE  /products/:id
```

Além disso:

```http
GET /products?category=...
GET /products?search=...
```

passam a ser suportados pela rota de listagem.

---

# 4️⃣ Etapa 4: Testando os Endpoints

> **🎯 Objetivo:**
>
> Garantir que todas as funcionalidades estejam operando corretamente.

---

## 1. Atualização Parcial

Requisição:

```http
PATCH /products/1
```

Body:

```json
{
  "price": 299.9
}
```

Resposta esperada:

```json
{
  "id": 1,
  "title": "Mochila Executiva",
  "price": 299.9,
  "description": "...",
  "category": "...",
  "image": "...",
  "rating": {
    "rate": 4.2,
    "count": 318
  }
}
```

---

## 2. Atualizar Produto Inexistente

Requisição:

```http
PATCH /products/999
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

## 3. Filtrar por Categoria

Requisição:

```http
GET /products?category=eletrônicos
```

Resposta esperada:

```json
[
  {
    "id": 5,
    "title": "Notebook Gamer",
    "category": "eletrônicos"
  }
]
```

---

## 4. Buscar por Título

Requisição:

```http
GET /products?search=mochila
```

Resposta esperada:

```json
[
  {
    "id": 1,
    "title": "Mochila Executiva Premium"
  }
]
```

---

## 5. Busca Sem Resultados

Requisição:

```http
GET /products?search=produtoinexistente
```

Resposta esperada:

```json
[]
```

Status esperado:

```http
200 OK
```

---

# 🧪 Desafio Extra

Implemente as seguintes melhorias.

---

## Permitir Busca Combinada

Exemplo:

```http
GET /products?category=eletrônicos&search=notebook
```

Retornando apenas produtos que satisfaçam ambos os critérios.

---

## Ordenação por Preço

Adicionar suporte a:

```http
GET /products?sort=price
```

ou

```http
GET /products?sort=-price
```

Onde:

* `price` → ordem crescente.
* `-price` → ordem decrescente.

---

## Limitação de Resultados

Adicionar suporte a:

```http
GET /products?limit=5
```

Retornando apenas os primeiros registros encontrados.

---

## Ignorar Diferenças de Maiúsculas e Minúsculas

Garantir que as consultas abaixo retornem o mesmo resultado:

```http
GET /products?search=mochila
```

```http
GET /products?search=MOCHILA
```

```http
GET /products?search=Mochila
```

---

# 📋 Tabela Atualizada de Endpoints

| Método   | Rota                     | Descrição                           | Status de Sucesso |
| -------- | ------------------------ | ----------------------------------- | :---------------: |
| `GET`    | `/products`              | Lista todos os produtos ✅           |       `200`       |
| `GET`    | `/products/:id`          | Busca um produto pelo ID ✅          |       `200`       |
| `POST`   | `/products`              | Cria um novo produto ✅              |       `201`       |
| `PUT`    | `/products/:id`          | Atualiza completamente um produto ✅ |       `200`       |
| `PATCH`  | `/products/:id`          | Atualização parcial ✅               |       `200`       |
| `DELETE` | `/products/:id`          | Remove um produto ✅                 |       `204`       |
| `GET`    | `/products?category=...` | Filtra por categoria ✅              |       `200`       |
| `GET`    | `/products?search=...`   | Busca por título ✅                  |       `200`       |

---

# 🚀 Próximas Etapas

Na próxima entrega iremos evoluir a aplicação implementando:

* Migração da persistência em arquivo JSON para PostgreSQL.
* Integração da API com banco de dados relacional.
* Utilização de SQL para consultas e manipulação de dados.
* Organização da camada de acesso a dados.
* Hospedagem da API em um serviço de nuvem.
* Disponibilização pública dos endpoints.
* Testes da API em ambiente de produção.

Ao final da Entrega 4, sua aplicação deixará de utilizar arquivos JSON como mecanismo de persistência e passará a operar utilizando um banco de dados relacional real.
