/**
 * 7. Crie um objeto que represente um livro, com propriedades para o título, autor, editora e número de
 * páginas. Em seguida, crie um método que retorne uma descrição do livro, seguindo esse formato:
 * “O livro [título], de autoria de [autor], tem [número de páginas] páginas e é publicado pela editora [editora].”.
 */

const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  editora: "HarperCollins",
  paginas: 1216,
  descricao: function () {
    return `O livro ${this.titulo}, de autoria de ${this.autor}, tem ${this.paginas} páginas e é publicado pela editora ${this.editora}.`;
  },
};

console.log(livro.descricao());
// Output: O livro O Senhor dos Anéis, de autoria de J.R.R. Tolkien, tem 1216 páginas e é publicado pela editora HarperCollins.
