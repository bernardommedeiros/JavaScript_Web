// Laço de repetição For

// recebe 3 parâmetros (ponto inicial, condição de parada, condição do que fazer)
for (let i = 0; i<1001; i++) {
    document.getElementById("teste").innerHTML += i + (", ");
}

for (let i = 1900; i < 2026; i++) {
    document.getElementById("birth").innerHTML += '<option value="' + i + '">' + i + '</option>';
}

//document.getElementById("birth").innerHTML += `<option value="${i}">${i}</option>`;
// ${} -> permite a inserção de variáveis em strings


const carros = ["ford", "honda", "toyota", "byd"]

for (let i = 0; i < carros.length; i++){
    document.getElementById("carros").innerHTML += `<option value="${i}">${carros[i]}</option>`;
    document.getElementById("carros2").innerHTML += carros[i] + ", ";
}