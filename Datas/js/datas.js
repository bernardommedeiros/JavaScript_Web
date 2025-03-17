// Manipular Datas


// Comando base para pegar data
let data = new Date();

console.log(data);

// método para pegar o ano
let ano = data.getFullYear();

console.log(ano);

// método para pegar o mês, começa a contagem em 0, portanto, adicionar sempre +1

let mes = data.getMonth() + 1;

console.log(mes);


// nesse caso  pega um elemento do array sendo primeiro elemento no índice 0, por isso sempre reduzindo 1
const mesesDoAno = ["Janeiro ", "Feveireiro ", "Março ", "Abril ", "Maio ", "Junho ", "Julho ", "Agosto, ", "Setembro ", "Agosto ", "Outubro ", "Novembro ", "Dezembro"]

let mesEscrito = mesesDoAno[mes - 1];

console.log(mesEscrito);

// método para pegar o dia do mês

let dia = data.getDate();

console.log(dia);

// método para pegar o dia da semana, começa a contagem em 0, portanto, adicionar sempre +1

let diaSemana = data.getDay() + 1;

console.log(diaSemana);

const diaEscrito = ["Domingo ", "Segunda-Feira ", "Terça-Feira ", "Quarta-Feira ", "Quinta-Feira ", "Sexta-Feira ", "Sábado "];

// nesse caso  pega um elemento do array sendo primeiro elemento no índice 0, por isso sempre reduzindo 1
console.log(diaEscrito[diaSemana - 1]);

// método para pegar a hora

let hora = data.getHours();

console.log(hora);

// método para pegar os minutos

let minutos = data.getMinutes();

console.log(minutos);

// método para pegar os segundos

let segundos = data.getSeconds();

console.log(segundos);

// método para pegar a hora em 24 horas

let hora24 = data.getHours();

console.log(hora24);

// método para pegar a data e hora no formato DD/MM/YYYY

let dataBR = data.toLocaleString('pt-br'); 

console.log(dataBR);

// método para mostrar apenas a data

let dataOficial = data.toLocaleString('pt-br', { dateStyle: 'short' }); 

console.log(dataOficial);

// método para mostrar apenas a hora

let horaOficial = data.toLocaleString('pt-br', {timeStyle: 'short' }); 

console.log(horaOficial);

// método para pegar hora, minutos e segundos separado
let d, diaMes2, mes2, ano2, hora2, minuto2, segundo2

d = new Date();

diaMes2 = d.getDate();

mes2 = d.getMonth() + 1;

ano2 = d.getFullYear();

hora2 = d.getHours();

minuto2 = d.getMinutes();

segundo2 = d.getSeconds();

function addZero(x){
    // ? -> funciona como else
    return x < 10 ? '0' + x : '' + x;
};

console.log(addZero(diaMes2) + "/" + addZero(mes2) + "/" + ano2 + " " + hora2 + ":" + minuto2 + ":" + segundo2);

