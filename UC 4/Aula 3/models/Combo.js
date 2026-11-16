import { Produto } from "./Produto.js";

export class Combo extends Produto {
  constructor(id, nome, preco, estoque, itens) {
    // super() faz referência à classe Produto (classe Pai)
    super(id, nome, preco, "combo", estoque);
    // aqui faz parte da classe Combo
    this.itens = itens;
  }

  descricao() {
    return `${this.nome}: ${this.itens.join(" + ")}`;
  }
}
