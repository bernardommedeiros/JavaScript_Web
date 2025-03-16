// Métodos de Tempo JavaScript

//setTimeout
function ativarContagem(){
    document.getElementById('tempo').innerHTML = "começou a contar!";
    //setTimeout(function, tempo em milissegundos)
    setTimeout(function(){ document.getElementById('tempo').innerHTML = "Executou o setTimeout" }, 5000)
    setTimeout(function(){ document.body.style.backgroundColor = "blue";}, 6000)
    setTimeout(function() {
        if (document.body.style.backgroundColor === "blue" || document.body.style.backgroundColor === "rgb(0, 0, 255)") {
            document.getElementById('bgcolor').innerHTML = "O plano de fundo foi alterado!";
        }
    }, 100);
}

function pausarContagem(){
    clearTimeout();
    document.getElementById('tempo').innerHTML = "pausou a contagem!";
}

// setInterval

