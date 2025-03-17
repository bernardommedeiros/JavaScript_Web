// JSON

const carro = {
    marca: "fiat",
    modelo: "Uno",
    ano: 2010,
    motor: ["1.0", "1.4", "1.6"]
}

/* document.getElementById('area').innerHTML = carro
-> não se lê código de forma escrita, é abstrato, dessa forma essa linha da erro, sendo necessário converter o objeto em texto */

let texto=JSON.stringify(carro);

document.getElementById('area').innerHTML = texto;

/* console.log(texto.modelo);
-> da erro, pois é um texto e não um objeto, sendo necessário transformá-lo novamente para objeto */

let obj = JSON.parse(texto);

document.getElementById('area2').innerHTML = obj.modelo;

document.getElementById('area3').innerHTML = obj.motor[2];

// requisição remota ao site para carregar as informações

const ajax = new XMLHttpRequest();

ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('area4'). innerHTML = this.responseText;
    let obj2 = JSON.parse(this.responseText);
    alert (obj2.uf)
}

// automatização de busca no site requisitado
function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();

ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
ajax.send();

ajax.onload = function(){

    document.getElementById('texto').innerHTML = this.responseText;

    // passando para obj
    let obj3 = JSON.parse(this.responseText);
    let uf = (obj3.uf);
    document.getElementById('texto2').innerHTML = "UF: " + uf;


    }
}







