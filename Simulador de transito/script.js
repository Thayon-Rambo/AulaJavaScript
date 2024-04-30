let idadePessoa, idadeMinima = 18;

idadePessoa = Number(prompt('Digite a sua idade: '));

if(idadePessoa >= idadeMinima){
    alert('Você pode dirigir!');
}else{
    alert('Você ainda não pode dirigir!');
}