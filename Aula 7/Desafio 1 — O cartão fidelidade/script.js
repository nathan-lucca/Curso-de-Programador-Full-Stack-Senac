const cliente = {
  nome: "Ana",
  cidade: "Caruaru",
  pontos: 120,
  ganharPontos(valor) {
    this.pontos += Math.floor(valor);
  },
  descricao() {
    return `${this.nome} (${this.cidade}) — ${this.pontos} pontos`;
  },
};

cliente.ganharPontos(89.9);
cliente.descricao();

