const botao = document.getElementById("botao"); // Obtendo o elemento do botão pelo ID
const mensagem = document.getElementById("mensagem"); // Obtendo o elemento da mensagem pelo ID

// Adicionar um evento de clique ao botão
botao.addEventListener("click", function () {
  mensagem.textContent = "Você clicou no botão!"; // Alterando o texto da mensagem
});
