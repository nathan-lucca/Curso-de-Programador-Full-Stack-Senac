class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  calcularBonus() {
    return this.salario * 0.05;
  }
}

class Vendedor extends Funcionario {
  constructor(nome, salario, vendas) {
    super(nome, salario);
    this.vendas = vendas;
  }

  calcularBonus() {
    return super.calcularBonus() + this.vendas * 0.02;
  }
}

class Gerente extends Funcionario {
  calcularBonus() {
    return this.salario * 0.1;
  }
}

const equipe = [
  new Funcionario("Ana", 2000),
  new Vendedor("Bruno", 1800, 25000),
  new Gerente("Carla", 4000),
];

let total = 0;

for (const e of equipe) {
  total += e.calcularBonus();
}
