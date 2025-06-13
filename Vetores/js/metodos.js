// Teste dos principais métodos em vetores no JavaScript

// push
const materias = ["Desenvolvimento Web", " POO", " Algoritmos", " EDL"];

materias.push(" Banco de Dados");

document.getElementById("teste1").innerHTML = materias;

// pop

materias.push(" SO ");

document.getElementById("teste2").innerHTML = materias.pop();

// join

const pessoa = ["Bernardo", " Medeiros", " 18 anos", " Desenvolvedor"];

document.getElementById("teste3").innerHTML = pessoa. join(" + ");

// shift

const frameworks = ["React", "Angular", "Vue"]

frameworks.shift()

document.getElementById("teste4").innerHTML = frameworks;

// unshift

frameworks.unshift("JS");
document.getElementById("teste5").innerHTML = frameworks;

// delete

delete frameworks[2];
document.getElementById("teste6").innerHTML = frameworks;

// splice

var bernardo = ["B", "E", "R", "N", "A", "R", "D", "O"]

bernardo.splice(1, 3, "item adicionado 1 ", "item adicionado 2 ", "item adicionado 3 ", "item adicionado 4");
document.getElementById("teste7").innerHTML = bernardo;

// concat
var bernardo = ["B", "E", "R", "N", "A", "R", "D", "O"]
const sarah = [" S", "A", "R", "A", "H"]

const concatenando = bernardo.concat(sarah);

document.getElementById("teste8").innerHTML = concatenando.join("");

// slice

const professores = ["Braulio", "Placido", "Gilbert", "Dani", "Silvia"];

const homens = professores.slice(0,3);
document.getElementById("teste9").innerHTML = homens;

// sort

const profOrdem = professores.sort();
document.getElementById("teste10").innerHTML = profOrdem;

const inteiros = [8, 9, 10, 20, 43];
inteiros.sort(function (a, b){return a - b;})
document.getElementById("teste11").innerHTML = inteiros;

inteiros.sort(function (a, b){return b - a;})
document.getElementById("teste12").innerHTML = inteiros;

// reverse 

profOrdem.reverse();
document.getElementById("teste13").innerHTML = profOrdem; 

// includes

document.getElementById("teste18").innerHTML = "Está presente: " + profOrdem.includes("Dani");

// Maior e Menor número

const numeros = [10, 5, 8, 2, 15];

document.getElementById("teste14").innerHTML = numeros;

function maiorNumero(numeros){
    return Math.max.apply(null, numeros); 
}

const numeros2 = [10, 5, 3, 8, 22];

document.getElementById("teste15").innerHTML = "Maior número: " + maiorNumero(numeros2);

function menorNumero(numeros){
    return Math.min(...numeros);
}

document.getElementById("teste16").innerHTML = "Menor número: " + menorNumero(numeros);

// Filtragem

const maior9 = numeros2.filter(filtragem);

function filtragem(numeros){
    return numeros > 9;
}

document.getElementById("teste17").innerHTML = "Maiores que 9: " + maior9;