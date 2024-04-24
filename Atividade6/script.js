let numeroTotalEleitores, numeroVotosCandidatoX, numeroVotosCandidatoY, numeroTotalVotosBrancos, numeroTotalVotosNulos;
let somaVotos, porcentagemCadidatoX, porcentagemCadidatoY, porcentagemVotosBrancos, porcentagemVotosNulos;


numeroTotalEleitores = Number(prompt('Digite a quantidade de eleitores: '));
numeroVotosCandidatoX = Number(prompt('Digite a quantidade de votos candidato X: '));
numeroVotosCandidatoY = Number(prompt('Digite a quantidade de votos candidato Y: '));
numeroTotalVotosBrancos = Number(prompt('Digite a quantidade de votos em branco: '));
numeroTotalVotosNulos = Number(prompt('Digite a quantidade de votos nulos: '));

somaVotos = numeroVotosCandidatoX + numeroVotosCandidatoY + numeroTotalVotosBrancos + numeroTotalVotosNulos;

porcentagemCadidatoX = numeroVotosCandidatoX / somaVotos * 100
porcentagemCadidatoY = numeroVotosCandidatoY / somaVotos * 100
porcentagemVotosBrancos = numeroTotalVotosBrancos / somaVotos * 100
porcentagemVotosNulos = numeroTotalVotosNulos / somaVotos * 100

alert(`Porcentagem de votos candidato X: ${porcentagemCadidatoX}%\nPorcentagem de votos candidato Y:
 ${porcentagemCadidatoY}% \nPorcentagem de votos em branco: 
 ${porcentagemVotosBrancos}% \nPorcentagem de votos nulos: ${porcentagemVotosNulos}%`)