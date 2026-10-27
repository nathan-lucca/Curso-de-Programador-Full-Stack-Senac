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
  #estoque;

  constructor(nome, preco, estoque) {
    super(nome, preco);
    this.#estoque = estoque;
  }

  get estoque() {
    return this.#estoque;
  }

  vender(qtd) {
    if (qtd > this.#estoque) return false;

    this.#estoque -= qtd;
    return true;
  }

  calcularFrete() {
    return 15;
  }
}

class CursoOnline extends Produto {
  constructor(nome, preco, link) {
    super(nome, preco);
    this.link = link;
  }

  vender() {
    return true;
  } // sempre disponível
}

class Carrinho {
  constructor() {
    this.itens = [];
  }

  adicionar(produto, qtd = 1) {
    if (!produto.vender(qtd)) return false;

    this.itens.push({ produto, qtd });
    return true;
  }

  subtotal() {
    let t = 0;

    for (const i of this.itens) {
      t += i.produto.preco * i.qtd;
    }

    return t;
  }

  frete() {
    let t = 0;

    for (const i of this.itens) {
      t += i.produto.calcularFrete() * i.qtd;
    }

    return t;
  }

  total() {
    return this.subtotal() + this.frete();
  }
}

class Pedido {
  constructor(carrinho, pagamento) {
    this.carrinho = carrinho;
    this.pagamento = pagamento;
  }

  total() {
    return this.pagamento.calcularTotal(this.carrinho.total());
  }
}

const headset = new ProdutoFisico("Headset", 229.9, 4);
const mouse = new ProdutoFisico("Mouse", 49.9, 15);
const webcam = new ProdutoFisico("Webcam", 159.9, 0);
const curso = new CursoOnline("JavaScript do Zero", 197.0, "...");

const carrinho = new Carrinho();
carrinho.adicionar(headset); // true
carrinho.adicionar(mouse, 2); // true
carrinho.adicionar(curso); // true
carrinho.adicionar(webcam); // false (sem estoque)

carrinho.subtotal(); // 526.70
carrinho.frete(); // 45   (15 + 2×15 + 0)
carrinho.total(); // 571.70

new Pedido(carrinho, new Pix()).total(); // 543.12
new Pedido(carrinho, new Cartao()).total(); // 571.70
new Pedido(carrinho, new Boleto()).total(); // 575.20
// estoque depois: Headset 3 | Mouse 13
