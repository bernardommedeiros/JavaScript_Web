// Reduz o array a apenas um elemento

const numbers = [5, 50, 40, 9, 8, 70, 76, 51, 11, 22];

const total = numbers.reduce((acumulador, valor, index, array)=>{
    acumulador += valor;
    console.log(acumulador, valor);
    return acumulador;
}, 0)
/* ^
   | valor do acumulador */


// resultado do reduce -> reduziu todo o array a um elemento
console.log(total);

// por default o acumulador é o primeiro elemento e o valor é o segundo



// filter + map + reduce

const numerosPares = numbers.filter((valor) =>{
    return valor % 2 === 0;
});

console.log(numerosPares)

const numerosPares2 = numbers.filter((valor) =>{
    return valor % 2 === 0;
}).map((valor) =>{
    return valor *2;
});

console.log(numerosPares2)

const numerosPares3 = numbers.filter((valor) =>{
    return valor % 2 === 0;
}).map((valor) =>{
    return valor *2;
}).reduce((acumulador, valor) =>{
    return acumulador + valor;
});

console.log(numerosPares3)
