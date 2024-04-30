let notaUm, notaDois, notaTres,somaNotas, media, quantidadeProvas = 3;

notaUm = Number(prompt('Digite a primeira nota: '));
notaDois = Number(prompt('Digite a segunda nota: '));
notaTres = Number(prompt('Digite a terceira nota: '));

somaNotas = notaUm + notaDois + notaTres;
media = somaNotas / quantidadeProvas;

if(media >= 7){
    alert('Aprovado!, Sua media ' + media);
}else{
    alert('Reprovado!, Sua media ' + media);
}