// INSERÇÂO NO DISPLAY
function insertElement(element){
    document.getElementById('display').value += element;
}

// REMOVE
function removeElement(){
    const remove = document.getElementById('display').value;
    document.getElementById('display').value = remove.slice(0, -1);
}

// AC
function clearDisplay(){
    document.getElementById('display').value = '';
}

// CALCULO DOS ELEMENTOS DO DISPLAY APÓS REQUISIÇÂO DE GERAR RESULTADO ( * / + -)
function calc(){
    const displayElements = document.getElementById('display').value;

    document.getElementById('display').value = eval(displayElements);

}

function percentage() {
    
}


function not() {
    const displayNum = document.getElementById('display').value;
    document.getElementById('display').value = displayNum * -1;
}


