// setInterval
var tempo;
function ativarContagem(){
    // executa a função a cada x segundos
    tempo = setInterval(function() {
        var timer = document.getElementById('tempo').innerHTML;
        // parseInt -> transforma texto em inteiro
        var soma = parseInt(timer) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);
}

function zerarContagem(){
    clearInterval(tempo);
    document.getElementById('tempo').innerHTML = 0;
}