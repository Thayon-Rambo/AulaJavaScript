let produto = {
    nome: 'bala',
    preco: 1
};

let produtos = [];

produtos.push(produto);
produto = {
    nome: 'chiclé',
    preco: 0.25
};

produtos.push(produto);

for(i=0; i<produtos.length; i++){
    console.log('produto: ' + produtos[i].nome)
    console.log('R$: ' + produtos[i].preco)
};

