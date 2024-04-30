let leoesFemeas = 9, leoesMachos = 5, casais, territoriosolteiro = 320, multTerritorioCasal, multTerritorioSolteiro;
let solteiros, somaTerritorio, territoriocasal = 400;


casais = Number(prompt('Digite a quantidade de casais: '));

solteiros = leoesFemeas + leoesMachos;
solteiros = solteiros - (casais * 2);
multTerritorioCasal = territoriocasal * casais;
multTerritorioSolteiro = territoriosolteiro * solteiros;
somaTerritorio = multTerritorioCasal + multTerritorioSolteiro;

alert(`Territorio dos solteiros = ${multTerritorioSolteiro}\nTerritorio dos casais: = ${multTerritorioCasal}\nSoma dos territorios: = ${somaTerritorio}`);
