class CartaoFidelidade {
  #pontos = 0;

  get pontos() {
    return this.#pontos;
  }

  adicionar(valor) {
    this.#pontos += Math.floor(valor);
  }

  resgatar(qtd) {
    if (qtd > this.#pontos) return false;

    this.#pontos -= qtd;
    return true;
  }
}

const c = new CartaoFidelidade();
c.adicionar(89.9); // 89
c.adicionar(229.9); // 318
c.resgatar(500); // false
c.resgatar(300); // true → 18
c.pontos = 9999;
