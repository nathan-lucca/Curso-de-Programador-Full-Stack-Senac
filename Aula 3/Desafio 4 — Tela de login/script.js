const usuario = "admin";
const senha = "senha1234";
const tentativas = 1;
let msg;

if (tentativas >= 3) {
  msg = "Conta bloqueada. Procure o suporte.";
} else if (!usuario) {
  msg = "Informe o usuário.";
} else if (senha.length < 8) {
  msg = "A senha precisa ter pelo menos 8 caracteres.";
} else if (usuario === "admin" && senha === "senac2026") {
  msg = "Bem-vindo, admin!";
} else {
  const restantes = 3 - (tentativas + 1);

  msg = `Usuário ou senha incorretos. ${restantes} ${restantes === 1 ? "tentativa restante" : "tentativas restantes"}.`;
}

console.log(msg);
