class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  calcularFrete() {
    return 0;
  }
}

class ProdutoFisico extends Produto {
  calcularFrete() {
    return 15;
  }
}

class ProdutoPesado extends ProdutoFisico {
  calcularFrete() {
    return 40;
  }
}

class CursoOnline extends Produto {}

const itens = [
  new ProdutoPesado("Monitor", 899.9),
  new ProdutoFisico("Mouse", 49.9),
  new CursoOnline("Programador Full Stack", 197),
];

let frete = 0;

for (const i of itens) {
  frete += i.calcularFrete();
}

// E-book: com o if, calcularFrete({ tipo: "ebook" }) devolve undefined até alguém
// lembrar de mexer na função. Com classes: class Ebook extends Produto {} e pronto.
