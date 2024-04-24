let anoNacimento, anoAtual, idadeMes, idadeSemana, idadeDias, idadeAnos;

anoNacimento = Number(prompt('Digite o ano que você nasceu: '));
anoAtual = Number(prompt('Digite o ano atual: '));

idadeAnos = anoAtual - anoNacimento;
idadeMes = idadeAnos * 12;
idadeSemana = idadeMes * 4;
idadeDias = idadeSemana * 7;

alert('Sua idade em anos: ' + idadeAnos + '\nSua idade em meses: ' + idadeMes + '\nSua idade em semanas: ' + idadeSemana + '\nSua idade em dias: ' + idadeDias);