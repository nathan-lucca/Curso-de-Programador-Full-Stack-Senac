class Pagamento {
  calcularTotal(valor) {
    return valor;
  }
}

class Pix extends Pagamento {
  calcularTotal(valor) {
    return valor * 0.95;
  }
}

class Cartao extends Pagamento {} // usa o do pai

class Boleto extends Pagamento {
  calcularTotal(valor) {
    return valor + 3.5;
  }
}

for (const p of [new Pix(), new Cartao(), new Boleto()]) {
  console.log(p.calcularTotal(359.6).toFixed(2));
}
