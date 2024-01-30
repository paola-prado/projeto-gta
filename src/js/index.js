/* 
Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botôes de seleção de plataforma
    Passo 1 - pegar o botão de seleção de plataformas no JS pra poder veriicar quando o usuário clicar em cima dele.

    Passo 2 - adicionar a classe ativo no botão pra que o conteúdo dele apareça

Objetivo 2 - caso a lista de botões de plataforma já esteja aparecendo e o usuário clicar no botão de fechar, o conteúdo deve ser escondido
    Passo 1 - veriicar se o botão já foi ativado pelo usuário, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
*/

// Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botôes de seleção de plataforma

// Passo 1 - pegar o botão de seleção de plataformas no JS pra poder veriicar quando o usuário clicar em cima dele.

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});





