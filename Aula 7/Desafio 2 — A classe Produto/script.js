class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
  estaDisponivel() {
    return this.estoque > 0;
  }
  vender(qtd) {
    if (qtd > this.estoque) return false; // não deixa ficar negativo

    this.estoque -= qtd;
    return true;
  }
}

const headset = new Produto("Headset", 229.9, 4);
headset.vender(3);
headset.vender(2);
headset.vender(1);
headset.estaDisponivel();
