// Sempre tem o mesmo tamanho do array original

const numbers = [5, 50, 40, 9, 8, 70, 76, 51, 11, 22];
const numbersConsole = numbers.map((valor) => {
    return `Bernardo Array -> ${valor}`;
    });
console.log(numbersConsole)


//  1 parametro -> valor, 2 parametro -> index 3, parametro -> array
// const showNumbers = numbers.map((value, index, array) => {
//     // percorre todo o array e chega a o último valor
//     document.getElementById("map").innerHTML = "Exemplo do map percorrendo o array e retorna o último valor: " + value + " " + index + " " + "array";
//     });


const people = [
    { name: "Luiz", age: 18 },
    { name: "Alberto", age: 28 },
    { name: "Bernardo", age: 19},
    { name: "Ana", age: 39 },
    { name: "Sarah", age: 18 },
];

const names = people.map((value) =>{
    return value.name;
})

console.log(names);

/* dessa foprma mexe no array original
const ages = people.map((value) =>{
    delete value.name;
    return value;
    })

console.log(ages); */

const ages = people.map((value) =>{
    const newObj = { ...value };
    delete newObj.name;
    return newObj;
    })

console.log(ages);

const withIds = people.map((obj, index)=>{
    obj.uuid = (index+1) * 1000;
    return obj
})

console.log(withIds);