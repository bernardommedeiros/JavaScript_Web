// While (conmtador, condição de parada)

let x = 0; // Inicializando a variável 'x'

while (x < 5) {
    document.getElementById('teste').innerHTML += "Testando repetição " + x + " "; x++; 
}

let tecnologias = ["react ", "js ", "java ", "springboot ", "python ", "django "];

let contador = 0; 

while ( contador < tecnologias.length){
    document.getElementById('teste2').innerHTML += tecnologias[contador]; contador++;

}