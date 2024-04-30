let quilometros, horas, kmHoras

quilometros = Number(prompt('Digite quantos Kms tem a trilha: '));
horas = Number(prompt('Digite a duração da trilha em horas: '));

kmHoras = quilometros / horas;

alert('Sua media de velocidade durante essa trilha foi de '+ kmHoras + ' Km/h')