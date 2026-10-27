const nome = "João Silva";
const email = "joao@email.com";
const idade = 17;
const senha = "abc123";

const nomeValido = nome.length > 0;
const emailValido = email.includes("@");
const maiorDeIdade = idade >= 18;
const senhaValida = senha.length >= 8;

const cadastroValido = nomeValido && emailValido && maiorDeIdade && senhaValida;

console.log(`Cadastro válido: ${cadastroValido}`);
