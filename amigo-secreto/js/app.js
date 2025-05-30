// maneira que fiz
// function adicionar() {
//     let nome = document.getElementById('nome-amigo').value;

//     let amigos = document.getElementById('lista-amigos');

//     if (amigos.textContent) {
//         amigos.textContent += `, ${nome}`;
//     } else {
//         amigos.textContent = nome;
//     }

//     document.getElementById('nome-amigo').value = '';
// }

// function sortear() {
//     let amigos = document.getElementById('lista-amigos').textContent;

//     if (amigos.trim() === '') {
//         alert('Nenhum amigo foi adicionado!');
//         return;
//     }

//     let arrayAmigos = amigos.split(',').map(amigo => amigo.trim());
//     let sorteados = [];
//     let resultadoSorteio = '';

//     while (arrayAmigos.length > 1) {
//         let primeiroSorteado = arrayAmigos.splice(Math.floor(Math.random() * arrayAmigos.length), 1)[0];
//         let segundoSorteado = arrayAmigos.splice(Math.floor(Math.random() * arrayAmigos.length), 1)[0];
//         resultadoSorteio += `${primeiroSorteado} -> ${segundoSorteado}<br>`;
//     }

//     if (arrayAmigos.length === 1) {
//         resultadoSorteio += `${arrayAmigos[0]} não tem par.<br>`;
//     }

//     document.getElementById('lista-sorteio').innerHTML = resultadoSorteio;
// }


// function reiniciar() {
//     document.getElementById('lista-amigos').textContent = '';
//     document.getElementById('lista-sorteio').textContent = '';
// }
//gabarito
let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value.trim(); // Remove espaços extras
    let lista = document.getElementById('lista-amigos');
    
    if (amigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(amigo)) {
        alert('O nome já foi adicionado.');
    } else {
        amigos.push(amigo);

        if (lista.textContent === '') {
            lista.textContent = amigo;
        } else {
            lista.textContent += ', ' + amigo;
        }
    }

    document.getElementById('nome-amigo').value = ''; // Limpa o campo de entrada
}
    
function sortear() {
    if (amigos.length < 4) {
        alert('Digite pelo menos 4 nomes');
        return;
    }

    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // Limpa a lista de sorteio antes de adicionar

    for (let i = 0; i < amigos.length; i++) {
        let nextIndex = (i + 1) % amigos.length; // Para fazer o ciclo voltar ao primeiro nome
        sorteio.innerHTML += amigos[i] + ' --> ' + amigos[nextIndex] + '<br>';
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
