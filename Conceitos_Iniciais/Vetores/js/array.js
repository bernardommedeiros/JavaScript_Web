// Arrays - armazenam qualquer tipo

//Array literal

const list = ["Java", "Python", "JavaScript", "C"];
//----------------------------------------------------

const list2 = [];

list2[0] = "Go";
list2[1] = "C++";
list2[2] = "TypeScript";
//----------------------------------------------------

const list3 = new Array("BootStrap", "NodeJS", "HTML/CSS")
list3[0] = "React";

// metodo push -> adiciona ao final do array
list3.push = "Angular";

//outra maneira de adicionar ao final da lista
list3[lenght] = "Tailwind";

// verifica se é array ou não
alert(Array.isArray(list3));
console.log (list3);

