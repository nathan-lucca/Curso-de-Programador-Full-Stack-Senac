class Cliente {
  constructor(nome) {
    this.nome = nome;
    this.compras = [];
  }
  comprar(valor) {
    this.compras.push(valor);
  }
  totalGasto() {
    let t = 0;
    for (const v of this.compras) t += v;

    return t;
  }
  nivel() {
    const t = this.totalGasto(); // método chamando método

    if (t >= 1000) return "Ouro";
    if (t >= 500) return "Prata";

    return "Bronze";
  }
}

const c = new Cliente("Bruno");
c.comprar(450);
c.comprar(320);
c.comprar(289.9);
