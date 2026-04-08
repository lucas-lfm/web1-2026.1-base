const produtos = [
  {
    id: 1,
    nome: "Notebook Dell Inspiron",
    preco: 3500.0,
    qtd: 5,
    peso: 1.8,
    marca: "Dell",
  },
  {
    id: 2,
    nome: "Smartphone Galaxy S23",
    preco: 4200.0,
    qtd: 10,
    peso: 0.168,
    marca: "Samsung",
  },
  {
    id: 3,
    nome: "Headphone WH-1000XM5",
    preco: 2300.0,
    qtd: 8,
    peso: 0.25,
    marca: "Sony",
  },
  {
    id: 4,
    nome: "Teclado Mecânico K552",
    preco: 250.0,
    qtd: 15,
    peso: 0.9,
    marca: "Redragon",
  },
  {
    id: 5,
    nome: "Mouse MX Master 3",
    preco: 500.0,
    qtd: 12,
    peso: 0.14,
    marca: "Logitech",
  },
  {
    id: 6,
    nome: 'Monitor UltraWide 29"',
    preco: 1200.0,
    qtd: 6,
    peso: 5.2,
    marca: "LG",
  },
  {
    id: 7,
    nome: "SSD NVMe 1TB",
    preco: 450.0,
    qtd: 20,
    peso: 0.05,
    marca: "Kingston",
  },
  {
    id: 8,
    nome: "Cadeira Gamer",
    preco: 900.0,
    qtd: 4,
    peso: 18.0,
    marca: "DXRacer",
  },
  {
    id: 9,
    nome: "Webcam Full HD",
    preco: 300.0,
    qtd: 9,
    peso: 0.12,
    marca: "Logitech",
  },
  {
    id: 10,
    nome: "Caixa de Som Bluetooth",
    preco: 350.0,
    qtd: 11,
    peso: 0.6,
    marca: "JBL",
  },
];

// console.table(produtos);

// 1. Imprimir somente o nome dos produtos (for of)
for (let produto of produtos) {
  console.log(produto.nome);
}

// function imprimirPreco(produto) {
//   console.log(produto.preco);
// }

// 2. Imprimir os preços dos produtos (forEach)
produtos.forEach((produto) => {
  console.log(produto.preco);
});

// 3. Atualizar os valores dos produtos aplicando um desconto (map)
/**
 * O método map() percorre o array e retorna um novo array contendo os resultados da aplicação de uma função de callback
 * a cada elemento do array original. A função de callback é aplicada a cada elemento do array e deve retornar o valor que
 * será incluído no novo array.
 */
const produtosComDesconto = produtos.map((produto) => {
  const novoProduto = { ...produto }; // O operador spread (...) espalha os atributos do objeto dentro das chaves

  novoProduto.preco = novoProduto.preco * 0.9;

  return novoProduto;
});

console.table(produtosComDesconto);

// 4. Aplicar um filtro relativo ao peso do produto (filter), filtrando produtos com peso menor do que 500g
/**
 * O método filter() percorre o array e retorna um novo array contendo apenas os elementos que satisfazem a condição
 * especificada na função de callback. A função de callback deve retornar true para os elementos que devem ser incluídos
 * no novo array e false para os elementos que devem ser excluídos.
 */
const produtosFiltrados = produtos.filter((produto) => {
  return produto.peso < 0.5; // Retorna true para produtos com peso menor do que 0.5kg (500g) e false para os demais
});

console.table(produtosFiltrados);

// 5. Calcular o valor total do carrinho do usuário (reduce)
/**
 * O método reduce() percorre o array e retorna um único valor resultante da aplicação de uma função
 * a cada elemento do array original. A função de callback recebe dois argumentos: o acumulador (total) e o valor atual
 * (produto). O acumulador é atualizado a cada iteração e deve ser retornado no final da função. O valor
 * inicial do acumulador é definido como o segundo argumento do método reduce() (0 neste caso).
 */
const valorTotal = produtos.reduce((total, produto) => {
  total = total + produto.preco; // Atualiza o valor total acumulado
  return total; // Retorna o valor total atualizado para a próxima iteração
}, 0); // Começa a contagem do valor total a partir de 0

console.log("Valor total do carrinho: " + valorTotal);
