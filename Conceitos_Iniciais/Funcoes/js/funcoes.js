// bloco de código projetado para uma função especifica

function soma(valor1, valor2){
    return valor1 + valor2;
}

var total = soma(81, 100);

alert(total);

document.getElementById("soma").innerHTML = "Exemplo: Função Soma =" + " " + soma(10, 10);

function realParaDolar(valorReal, cotacaoDolar) {
    return valorReal / cotacaoDolar;
}

var conversao1 = realParaDolar(10, 6.19)

document.getElementById("conversao").innerHTML = "Exemplo: Função Soma =" + " " + conversao1;
// ou
var valorReal = 100
var cotacaoDolar = 6.19

var conversao2 = realParaDolar(valorReal, cotacaoDolar);

document.getElementById("conversao1").innerHTML = "Exemplo: Valor em Real É R$: " + valorReal + " " + "na cotação atual do Dólar " + cotacaoDolar + " da U$: " + conversao2;

// sem parametros - exemplo de evento

function hello(){
    alert("Hello, World!");
}


