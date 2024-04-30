let notaUm, notaDois, notaTres,pesoNotaTres = 3, media, somaNotas, notaPeso;

notaUm = Number(prompt('Digite a primeira nota: '));
notaDois = Number(prompt('Digite a segunda nota: '));
notaTres = Number(prompt('Digite a terceira nota: '));

notaPeso = notaTres * pesoNotaTres;
somaNotas = notaUm + notaDois + notaPeso
media = somaNotas / 3

alert('A media das notas é: ' + media)

