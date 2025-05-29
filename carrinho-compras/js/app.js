// //maneira que fiz
// let carrinho = [];

// function adicionar(event) {
//     event.preventDefault();

//     let produto = document.getElementById('produto').value;
//     let quantidade = parseInt(document.getElementById('quantidade').value);

//     carrinho.push({ produto, quantidade });
    
//     let listaProdutos = document.getElementById('lista-produtos');
//     listaProdutos.innerHTML = '';
    
//     let total = 0;

//     carrinho.forEach(item => {
//         let precoProduto = parseFloat(item.produto.split(' - ')[1].replace('R$', '').replace(',', '.'));
//         let sectionProduto = document.createElement('section');
//         sectionProduto.classList.add('carrinho__produtos__produto');
//         sectionProduto.innerHTML = `<span class="texto-azul">${item.quantidade}x</span> ${item.produto.split(' - ')[0]} <span class="texto-azul">${item.produto.split(' - ')[1]}</span>`;
        
//         total += precoProduto * item.quantidade;

//         listaProdutos.appendChild(sectionProduto);
//     });

//     let valorTotal = document.getElementById('valor-total');
//     valorTotal.innerHTML = `R$${total.toFixed(2)}`;
// }

// function limpar() {
//     carrinho = [];
//     document.getElementById('lista-produtos').innerHTML = '';
//     document.getElementById('valor-total').innerHTML = 'R$0.00'; 
// }

// document.querySelector('.botao-adicionar').addEventListener('click', adicionar);
// document.querySelector('.botao-limpar').addEventListener('click', limpar);

//gbarito
let totalGeral = 0;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}


function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
