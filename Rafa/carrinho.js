let itemsCarrinho = []
Lista()
function Comprar(){
    sucess = 1

    if(sucess = 1){
        itemsCarrinho = JSON.parse(localStorage.getItem("items_carrinho"))
        usuario = JSON.parse(localStorage.getItem("usuarios_cadastrados"))





        for(i=0;i<itemsCarrinho.length;i++){

        usuario[0].carrinho += itemsCarrinho[i]
        }
        localStorage.setItem("usuarios_cadastrados", JSON.stringify(usuario))
        localStorage.removeItem("items_carrinho")
    }
}
function Lista(){
    itemsCarrinho = JSON.parse(localStorage.getItem("items_carrinho"))
    let listacompleta = ''
    for (i=0;i < itemsCarrinho.length;i++){
        listacompleta = listacompleta + `${i+1} - ${itemsCarrinho[i]} <br>`
}
document.getElementById("lista").innerHTML = listacompleta
}
function Excluir(){
    let removerInput = document.getElementById("removerInput")
    
}

function voltarTelaPrincipal() {
    window.location.href="./telaPrincipal.html"
}