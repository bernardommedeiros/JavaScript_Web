/* 

Utilizadados para atribuir valores, comparar valores, executar operações aritméticas entre outros.

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição (da valor a uma variável)
3) Operadores de Sequência (concatena textos)
4) operadores de Comparação (compara valores)
5) Operadores de Condicional (Ternário) 
6) Operadores Lógicos ()
*/

// Operadores Aritméticos -> operações básicas

    var valor1, valor2;

    valor1 = 5;
    valor2 = 2;

    total = valor1 + valor2;

    document.getElementById('aritmeticos').innerHTML = "Exemplo aritmético de Soma(+)" + " " + "=" + " " + total;

    total = valor1 - valor2;

    document.getElementById('aritmeticos2').innerHTML = "Exemplo aritmético de Subtração(-)" + " " + "=" + " " + total;

    total = valor1 * valor2;

    document.getElementById('aritmeticos3').innerHTML = "Exemplo aritmético de Multiplicação(*)" + " " + "=" + " " + total;

    total = valor1 / valor2;

    document.getElementById('aritmeticos4').innerHTML = "Exemplo aritmético de Divisão(/)" + " " + "=" + " " + total;

    total = valor1 % valor2;

    document.getElementById('aritmeticos5').innerHTML = "Exemplo aritmético de Modularização(%)" + " " + "=" + " " + total;

    total = ++valor1 

    document.getElementById('aritmeticos6').innerHTML = "Exemplo aritmético de Incremento(++)" + " " + "=" + " " + total;


    total = --valor1 

    document.getElementById('aritmeticos7').innerHTML = "Exemplo aritmético de Decremento(--)" + " " + "=" + " " + total;


// Operadores de Atribuição -> atribuição de variáveis

    valor1 = 5;
    valor2 = 4;

    {
        //valor1 = valor1 + valor2, mesma coisa de:
        valor1 += valor2;
        document.getElementById('atribuicao').innerHTML = "Exemplo de Atribuição de Variável ao somar duas variáveis" + " " + "=" + " " + valor1;

        //valor1 = valor1 - valor2, mesma coisa de:
        valor1 -= valor2;
        document.getElementById('atribuicao2').innerHTML = "Exemplo de Atribuição de Variável ao subtrair duas variáveis" + " " + "=" + " " + valor1;

        //valor1 = valor1 / valor2, mesma coisa de:
        valor1 /= valor2;
        document.getElementById('atribuicao3').innerHTML = "Exemplo de Atribuição de Variável ao dividir duas variáveis" + " " + "=" + " " + valor1;
    }


// Operadores de Sequência -> concatenar strings

    var valor1 = "Bernardo";
    var valor2 = "Medeiros";

    var total = valor1 + " " + valor2;

    document.getElementById('sequencia').innerHTML = "Exemplo de Concatenação de Strings" + " " + "=" + " " + total;


// Operadores de Comparação -> comparar valores, True or False 
    var valor1, valor2, total

    valor1 = 5;
    valor2 = 4;

    total = (valor1 == valor2);

    document.getElementById('comparacao').innerHTML = "Exemplo de Comparação ao verificar se os valores são iguais" + " " + "=" + " " + total; //false

    total = (valor1 != valor2);

    document.getElementById('comparacao2').innerHTML = "Exemplo de Comparação ao verificar se os valores são diferentes" + " " + "=" + " " + total;

    valor1 = 8;
    valor2 = "8";

    total = (valor1 == valor2);

    document.getElementById('comparacao3').innerHTML = "Exemplo de Comparação ao verificar se os valores são iguais, independente do tipo" + " " + "=" + " " + total; 

    total = (valor1 === valor2);

    document.getElementById('comparacao4').innerHTML = "Exemplo de Comparação ao verificar se os valores são iguais, considerando o tipo (===)" + " " + "=" + " " + total; 

    valor1 = 8

    total = (valor1 != "8")

    document.getElementById('comparacao5').innerHTML = "Exemplo de Comparação ao verificar se os valores são diferentes, independente do tipo" + " " + "=" + " " + total; 

    total = (valor1 !== "8")

    document.getElementById('comparacao6').innerHTML = "Exemplo de Comparação ao verificar se os valores são diferentes, considerando o tipo" + " " + "=" + " " + total; 

    total = (valor1 > valor2);

    document.getElementById('comparacao7').innerHTML = "Exemplo de Comparação ao verificar se o valor da esquerda é maior que o valor da direita" + " " + "=" + " " + total;

    total = (valor1 < valor2);

    document.getElementById('comparacao8').innerHTML = "Exemplo de Comparação ao verificar se o valor da esquerda é menor que o valor da direita" + " " + "=" + " " + total;

    total = (valor1 >= valor2);

    document.getElementById('comparacao9').innerHTML = "Exemplo de Comparação ao verificar se o valor da esquerda é maior ou igual que o valor da direita" + " " + "=" + " " + total;

    total = (valor1 <= valor2);

    document.getElementById('comparacao10').innerHTML = "Exemplo de Comparação ao verificar se o valor da esquerda é menor ou igual que o valor da direita" + " " + "=" + " " + total;

// Operadores de Condicional (Ternário) -> atribui um valor em uma variável já atribuindo uma condicional a ela

var idade, eleitor;

idade = 18;
// ? -> caso seja verdade, resulta em não eleitor : senão, resulta em eleitor
eleitor = (idade >= 18) ? "Eleitora" : "Não é Eleitora";

document.getElementById('ternario').innerHTML = "A pessoa é eleitora ou não?" + " " + "=" + " " + eleitor + ", " + "a idade dela é" + " " + "de" + " " + idade + " " + "anos";

// Operadores Lógicos -> combinam duas ou mais expressões lógicas

// && (e)

var idade, eleitor;

idade = 64;

eleitor = (idade >= 18 && idade <= 65)? "Eleitora" : "Não é Eleitora";

resultado = (idade >= 18 && idade <= 65);

document.getElementById('logicos').innerHTML = "Exemplo Lógico com a expressão E (&&)" + ": " + "A pessoa é eleitora ou não?" + " " + "=" + " " + eleitor + ", " + "a idade dela é" + " " + "de" + " " + idade + " " + "anos" +  ", " + resultado;

// || (ou)

resultado = (idade === 18 || idade === 65);

document.getElementById('logicos2').innerHTML = "Exemplo Lógico com a expressão OU (||)" + ": " + "A pessoa é eleitora ou não?" + " " + "=" + " " + eleitor + ", " + "a idade dela é" + " " + "de" + " " + idade + " " + "anos" +  ", " + resultado;

// ! (not)

resultado =!(idade === 64);

document.getElementById('logicos3').innerHTML = "Exemplo Lógico com a expressão NOT (!)" + ": " + "A pessoa não é eleitora?" + " "  + " " + eleitor  + ", " + "a idade dela é" + " " + "de" + " " + idade + " " + "anos" +  ", " + resultado;


