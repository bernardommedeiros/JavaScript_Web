// Ações no Mouse

// Exemplo -> onmouseover

function turnBlue(){
    let div = document.getElementById("mouse1");
    div.style.backgroundColor = "blue";
}

// Exemplo -> onmouseout

function retornoRed(){
    let div = document.getElementById("mouse1");
    div.style.backgroundColor = "red";
}

// Exemplo -> onmousemove

function adicionatexto(){
    let p = document.getElementById("mouse2");
    p.append("olá");
}