document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os itens da listagem e os cartões
    const personagens = document.querySelectorAll(".listagem .pockaisen");
    const cartoes = document.querySelectorAll(".cartao-Pockaisen");

    // Função para remover a classe "ativo" de todos os personagens e cartões
    function removerAtivo() {
        personagens.forEach(personagem => personagem.classList.remove("ativo"));
        cartoes.forEach(cartao => cartao.classList.remove("aberto"));
    }

    // Adiciona evento de clique para cada personagem na listagem
    personagens.forEach(personagem => {
        personagem.addEventListener("click", function() {
            const personagemId = personagem.id;
            const cartaoCorrespondente = document.getElementById(`cartao-${personagemId}`);

            // Remove classes "ativo" e "aberto" de todos os outros elementos
            removerAtivo();

            // Adiciona a classe "ativo" ao personagem clicado e "aberto" ao cartão correspondente
            personagem.classList.add("ativo");
            cartaoCorrespondente.classList.add("aberto");
        });
    });
});
