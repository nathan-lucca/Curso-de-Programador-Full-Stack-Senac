class Carrinho {
  constructor() {
    this.itens = []; // cada item: { produto, qtd }
  }
  adicionar(produto, qtd = 1) {
    this.itens.push({ produto, qtd });
  }
  remover(nome) {
    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].produto.nome === nome) {
        this.itens.splice(i, 1);

        return true;
      }
    }

    return false;
  }
  subtotal() {
    let t = 0;
    for (const item of this.itens) t += item.produto.preco * item.qtd;

    return t;
  }
  frete() {
    return this.subtotal() >= 500 ? 0 : 29.9;
  }
  total() {
    return this.subtotal() + this.frete();
  }
}

const [mouse, teclado, headset] = catalogo; // ou buscarPorNome
const carrinho = new Carrinho();
carrinho.adicionar(headset);
carrinho.adicionar(mouse, 2);
carrinho.adicionar(teclado);
carrinho.remover("Teclado"); // true
carrinho.remover("Monitor"); // false
carrinho.subtotal().toFixed(2); // "329.70"
carrinho.frete(); // 29.9
carrinho.total().toFixed(2); // "359.60"
