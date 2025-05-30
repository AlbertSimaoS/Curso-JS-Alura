// maneira que fiz
// function comprar() {
//     let tipo = document.getElementById('tipo-ingresso').value;
//     let quantidade = parseInt(document.getElementById('qtd').value);

//     if (tipo === 'pista') {
//         let pista = document.getElementById('qtd-pista');
//         let qtdPistaDisponivel = parseInt(pista.textContent);
//         if(qtdPistaDisponivel >= quantidade){
//             let totalPista = qtdPistaDisponivel - quantidade;
//             pista.textContent = totalPista;
//         } else {
//             alert('Não há ingressos suficientes na Pista disponíveis.');
//         }
//     } else if (tipo === 'superior') {
//         let superior = document.getElementById('qtd-superior');
//         let qtdSuperiorDisponivel = parseInt(superior.textContent);
//         if(qtdSuperiorDisponivel >= quantidade){
//             let totalSuperior = qtdSuperiorDisponivel - quantidade;
//             superior.textContent = totalSuperior;
//         } else {
//             alert('Não há ingressos suficientes na parte Superior disponíveis.');
//         }
//     } else if (tipo === 'inferior') {
//         let inferior = document.getElementById('qtd-inferior');
//         let qtdInferiorDisponivel = parseInt(inferior.textContent);
//         if(qtdInferiorDisponivel >= quantidade){
//             let totalInferior = qtdInferiorDisponivel - quantidade;
//             inferior.textContent = totalInferior;
//         } else {
//             alert('Não há ingressos suficientes na parte Inferior disponíveis.');
//         }
//     }
// }

//gabarito
function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    } else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    } else{
        comprarInferior(qtd);
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade infisponivel para tipo Pista.');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantidade infisponivel para tipo Supeior.');
    } else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade infisponivel para tipo Inferior.');
    } else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');
    }
}
