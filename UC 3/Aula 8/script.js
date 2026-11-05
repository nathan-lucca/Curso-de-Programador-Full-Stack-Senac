const titulo = document.querySelector("#titulo");
console.log(titulo.textContent);

const mensagem = document.querySelector(".mensagem");
console.log(mensagem.textContent);

const botao = document.querySelector("button");
console.log(botao.textContent);

// escondendo inicialmente o centro
const centro = document.querySelector(".centro");
centro.style.display = "none";

// clicar no botão e aparecer um alerta
botao.addEventListener("click", function () {
  alert(`Parabéns! Você ganhou R$ 1.000.000,00!`);
});

// mouse encima do botão e aparecer o centro
botao.addEventListener("mouseover", function () {
  centro.style.display = "block";
});

// mouse fora do botão e desaparecer o centro
botao.addEventListener("mouseout", function () {
  centro.style.display = "none";
});

const botaoDeAlterarTexto = document.querySelector(".mudarTexto");
const mensagemParaSerAlterada = document.querySelector(".novoTexto");

botaoDeAlterarTexto.addEventListener("click", function () {
  mensagemParaSerAlterada.textContent = "O texto foi alterado com sucesso!";
});

const btnVermelho = document.querySelector(".vermelho");
const btnAmarelo = document.querySelector(".amarelo");
const paragrafoCor = document.querySelector(".paragrafoCor");

// alterando a cor do parágrafo para vermelho usando a classe "vermelha"
btnVermelho.addEventListener("click", function () {
  paragrafoCor.classList.add("vermelha");
  paragrafoCor.classList.remove("amarela");
});

// alterando a cor do parágrafo para amarelo usando a classe "amarela"
btnAmarelo.addEventListener("click", function () {
  paragrafoCor.classList.add("amarela");
  paragrafoCor.classList.remove("vermelha");
});

const btnAdicionarUm = document.querySelector(".addUm");
const btnRemoverUm = document.querySelector(".removerUm");
const contador = document.querySelector("#contador");

btnAdicionarUm.addEventListener("click", function () {
  contador.textContent = parseInt(contador.textContent) + 1;
});

btnRemoverUm.addEventListener("click", function () {
  if (parseInt(contador.textContent) > 0) {
    contador.textContent = parseInt(contador.textContent) - 1;
  }
});
