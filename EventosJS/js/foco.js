// Foco -> Quando recebe clique

//Exemplo onfocus

function limpaTexto(){
    document.getElementById("namePlace").value = "";
}

//Exemplo onchange -> quando o elemento é desfocado é houve mudança

function change(){
    console.log("houve mudança")
}

//Exemplo onblur

function color(){
    document.getElementById("idade").style.backgroundColor = "brown";
}