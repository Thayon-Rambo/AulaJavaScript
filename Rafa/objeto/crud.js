let nome = document.getElementById('productName');
let descricao = document.getElementById('productDescription');
let preco = document.getElementById('productPrice');

let produtos = []
let encontrado = -1

function cadastrar(){
    let produto = {
        nome: nome.value,
        descricao: descricao.value,
        preco: Number(preco.value)
    };
    produtos.push(produto)
    console.log(produtos)

    limparFormulario()

};

function limparFormulario(){
    nome.value = ''
    descricao.value = ''
    preco.value = ''
    nome.focus();
}

function pesquisar(){
    let pesquisa = nome.value;
    if (encontrado != -1){
        for(i=0; i < produtos.length; i++){
        
            if (produtos[i].nome == pesquisa){

                descricao.value = produtos[i].descricao;
                preco.value = produtos[i].preco;
                encontrado = i;
                encontrado = -1;
            }else{
                alert('Pesquisa primeiro mula');
            }
        }
    }

    console.log(pesquisa)
}

function editar(){
    produtos[encontrado].nome = nome.value
    produtos[encontrado].descricao = descricao.value
    produtos[encontrado].preco = Number(preco.value)

    console.log(produtos)


    limparFormulario()


}

function deletar(){

    
    if(encontrado != -1){
        produtos.splice(encontrado, 1);
        limparFormulario();
        encontrado = -1;
    }else{
        alert('Pesquisa primeiro mula')
    }

}

function gerarFakes(){
    let produto = {
        nome: 'Air force',
        descricao: 'Tenis casual',
        preco: 1200
    };
    produtos.push(produto);

    produto = {
        nome: 'T-shirt',
        descricao: 'Camisa casual',
        preco: 200
    };
    produtos.push(produto);

    produto = {
        nome: 'Socks',
        descricao: 'Meia casual',
        preco: 40
    };
    produtos.push(produto);

    produto = {
        nome: 'Legs',
        descricao: 'Calça casual',
        preco: 200
    };
    produtos.push(produto);

    console.log(produtos);
}