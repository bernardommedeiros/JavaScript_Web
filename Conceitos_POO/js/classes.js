// As classes usam o método constructor para produzir os objetos

/* Exemplo de Objeto

    const carro = {
    marca: fiat;
    modelo: "Uno",
    ano: 2010,
    }
*/

class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    //método
    buzina(){
        return this.modelo + "Buzinou";
    }

}

// Objeto
const uno = new Carro("Fiat", "Uno", 2010);
const corolla = new Carro("Toyota", "Corolla", 2013);

console.log(uno, corolla);

console.log(corolla.ano);

console.log(uno.buzina());

corolla.ano = 2015;

console.log(corolla.ano);

