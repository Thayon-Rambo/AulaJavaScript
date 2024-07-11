let produtos = [];

function cadastrarProduto(){
    let produto = {
        nome: prompt('Nome do produto: '),
        preco: Number(prompt('Preço do produto: '))
    }

    produtos.push(produto)

    console.log(produtos)

    alert('nome do produto: ' + produto.nome + '\n' + 'Preço: R$' + produto.preco)
};