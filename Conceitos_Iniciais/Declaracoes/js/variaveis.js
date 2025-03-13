/*

3 tipos de variáveis no JS

-> let 
-> var
-> const

*/ 

//VAR -> possibilita a reatribuação de valores

var pessoa1 = "Bernardo";
alert(pessoa1);

var a = 2;
var b = 4;
var c = 8;

var d = a + b + c;

alert (d);

// MANEIRA MAIS ORGANIZADA  

// declaração das variaveis -> undefined: pois as variaveis não recebem valor
var d, e, f;

// atribuindo valores às variaveis
d = 2;
e = d + 1;
f = e + 1;

// reatribuição -> só é possível com var

f = 1;

// outro exemplo

var nome, sobrenome, nome_completo, idade, pessoa;

nome = "Bernardo";

sobrenome = "Medeiros";

nome_completo = nome + " " + sobrenome;

idade = 19 + " " + "anos";

pessoa = nome_completo + " , " + idade;

document.getElementById('texto').innerHTML = pessoa;

// DIFERENÇAS - VAR, LET E CONST

/* VAR 

-> reatribuição em escopo global.

*/
var x = 10; // = 10

// dentro fora de um bloco de código a variável é reatribuida
{
   var x = 20; // = 20
}

document.getElementById('variaveisX').innerHTML = x;


/* LET 

-> variável fixa e única, não é possível declara-lá novamente, alterações somente dentro do bloco. 

-> o mais utilizado.

*/

let y = 10; // = 10

{
   y = 20; // = 20
}

document.getElementById('variaveisY').innerHTML = y; // = 10



/* CONST 
-> variável fixa e única, não é possível alterar seu valor, somente declarar.
-> semelhante ao private final do java, sempre será o valor declarado, sem possibilidade de mudança.

*/
