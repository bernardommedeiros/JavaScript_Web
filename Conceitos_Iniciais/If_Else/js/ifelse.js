// Condicionais

let horario;

horario = new Date().getHours();

if (horario < 12){
    alert("Bom Dia!");
}

else if (horario >= 12 && horario < 18){
    alert("Boa Tarde!");
}
else{
    alert("Boa Noite!");
}

function verificaNome(){
    let nome;
    nome = document.getElementById("nome").value;

    if (nome == "" || nome == " " || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "Insira chars!";
        p.style.color = "red";
    }
    else{
        let p = document.getElementById("teste");
        p.innerHTML = "Nome validado!";
        p.style.color = "green";
    }
}