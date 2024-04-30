let idadeUsuario;

idadeUsuario = Number(prompt('Digite a sua idade: '));

if(idadeUsuario < 12){
    alert('Você recebeu desconto de 50%');
}else if(idadeUsuario >= 12 && idadeUsuario <= 18){
    alert('Você recebeu desconto de 25%');
}else{
    alert('Sem desconto velho!');
}