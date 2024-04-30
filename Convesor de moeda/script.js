let dolar, reais, precoDolar;

precoDolar = Number(prompt('Digite o preço do dolar: '));
dolar = Number(prompt('Digite quantos dolares quer converter: '));

reais = dolar * precoDolar;

if(dolar > 5){
    alert('O dolar está caro, Você tem ' + reais + ' R$');
}else{
    alert('Dolar está barato, Você tem ' + reais + ' R$');
}