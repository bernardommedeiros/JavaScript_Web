// Filtragem

const numbers = [5, 50, 40, 9, 8, 70, 76, 51, 11, 22];


/*function filterCall(value, indice, array){
    return value > 10;

    //if (value > 10){
        return value;
    }
    else{
        return value;
    }
} 

const filterNumbers = numbers.filterCall(filter); */

const filterNumbers = numbers.filter((value) => {
    return (value>10);
})

document.getElementById("filter").innerHTML = "Maiores que 10: " + filterNumbers;


// Exemplo com indice

const numbers2 = [56, 12, 10, 3, 4, 98, 66, 71, 16, 26];


const filterNumbers2 = numbers2.filter((value, index, array) => {
        console.log(index);
        return (value>10);
    })

document.getElementById("filter2").innerHTML = "Cheque o indice dos números do array original no console, esses são os maiores que 10: " + filterNumbers2;

// Exemplo com objetos

const people = [
    {
        name: "Luiz",
        age: 18,
    },
    {
        name: "Alberto",
        age: 28,
    },
    {
        name: "Bernardo",
        age: 19,
    },
    {
        name: "Ana",
        age: 39,
    },
    {
        name: "Sarah",
        age: 18,
    },
];

const filterNameSize = people.filter((obj) => {
        return (obj.name.length >=5);
    })

    console.log(filterNameSize)

const peopleData = filterNameSize.map(p => `${p.name} (${p.age} anos)`).join("<br>");

document.getElementById("filterNameSize").innerHTML = "Pessoas com nome maior que 5 letras: " + peopleData
