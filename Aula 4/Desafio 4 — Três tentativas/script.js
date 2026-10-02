const digitadas = ["123", "abc", "senac2026", "x"];
let i = 0;
let liberado = false;

do {
  console.log(`Tentativa ${i + 1}: ${digitadas[i]}`);

  if (digitadas[i] === "senac2026") {
    liberado = true;
    break;
  }

  i++;
} while (i < 3);

console.log(liberado ? "Acesso liberado" : "Conta bloqueada");
// array do slide → acerta na 3ª tentativa: "Acesso liberado"
// ["1", "2", "3", "senac2026"] → "Conta bloqueada" (a 4ª senha nunca é testada)
