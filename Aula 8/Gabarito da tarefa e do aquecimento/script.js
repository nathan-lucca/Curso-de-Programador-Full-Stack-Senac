// Tarefa: ordem de serviço
class OrdemServico {
  constructor(cliente, aparelho, valor) {
    this.cliente = cliente;
    this.aparelho = aparelho;
    this.valor = valor;
    this.status = "Aberta";
  }

  concluir() {
    this.status = "Concluída";
  }

  descricao() {
    return `${this.aparelho} de ${this.cliente} — R$ ${this.valor.toFixed(2)} — ${this.status}`;
  }
}

// Aquecimento: Funcionario
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  aumentar(pct) {
    this.salario += (this.salario * pct) / 100;
  }

  descricao() {
    return `${this.nome} — R$ ${this.salario.toFixed(2)}`;
  }
}

const f = new Funcionario("Diego", 2000);
f.aumentar(10); // 2200
f.aumentar(5); // 2310 (5% sobre 2200)
f.descricao(); // "Diego — R$ 2310.00"
