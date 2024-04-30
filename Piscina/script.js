let azulejos = 120, largura, comprimento, metroQuadrado, precoAzulejo = 45.5, quantidadeAzulejos, calcPreco, calcPrecoDois;

largura = Number(prompt('Digite a largura da piscina em metros: '));
comprimento = Number(prompt('Digite o comprimento da piscina em metros: '));

metroQuadrado = largura * comprimento;
quantidadeAzulejos = metroQuadrado * azulejos;
calcPreco = quantidadeAzulejos / 2;
calcPreco =  calcPreco / 30;
calcPrecoDois = calcPreco * precoAzulejo;

alert(`Quantidade de azulejos a ser comprados ${quantidadeAzulejos}\nValor total a ser pago = ${calcPrecoDois}`);
