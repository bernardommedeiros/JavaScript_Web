function verificaCor() {
    let cor = document.getElementById('cor').value.toLowerCase();; // converte para minúsculas para evitar problemas de comparação

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        default:
            alert("Cor não reconhecida!");
            break;
    }
}
