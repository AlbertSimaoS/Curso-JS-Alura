//maneira que fiz

// function alterarFundo(id) {
//     let fundo = document.querySelector(`#game-${id} .dashboard__item__img`);
//     if (fundo.classList.contains('dashboard__item__img--rented')) {
//         fundo.classList.remove('dashboard__item__img--rented');
//     } else {
//         fundo.classList.add('dashboard__item__img--rented');
//     }
// }

// function alterarBotao(id) {
//     let botao = document.querySelector(`#game-${id} .dashboard__item__button`);
//     if (botao.classList.contains('dashboard__item__button--return')) {
//         botao.classList.remove('dashboard__item__button--return');
//         botao.textContent = 'Alugar';
//     } else {
//         botao.classList.add('dashboard__item__button--return');
//         botao.textContent = 'Devolver';
//     }
// }

// function alterarStatus(id) {
//     alterarFundo(id);
//     alterarBotao(id);
// }

//gabarito
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')){
        let confirmacao = confirm('Você tem certeza que deseja devolver?')
        if(confirmacao){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        } else{
            return;
        }
        
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
}

let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
})
