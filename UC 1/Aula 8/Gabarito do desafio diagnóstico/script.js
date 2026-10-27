// 1. Encapsulamento: estoque privado, só muda pelo vender()
class Produto {
  #estoque;

  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
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
}

headset.estoque = -5; // ignorado (no console); TypeError em modo estrito
headset.#estoque = -5; // SyntaxError: Private field '#estoque' must be declared...

// 2. Herança: o curso reaproveita o Produto sem copiar
// 3. Polimorfismo: cada classe tem o próprio calcularFrete()
//    (ver hierarquia completa no Anexo D)
