export class Cliente {
  constructor(nome, email, cidade) {
    this.nome = nome;
    this.email = email;
    this.cidade = cidade;
    this.pontos = 0;
  }

  apresentar() {
    return `Olá! Meu nome é ${this.nome} e sou de ${this.cidade}!`;
  }

  ganharPontos(valor) {
    if (valor <= 0 || valor > 100) {
        throw new Error("O valor especificado precisa ser maior que 0 e menor que 100");
    }

    this.pontos = this.pontos + valor;
  }
}
