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
    function calc(){
        const displayElements = document.getElementById('display').value;
    
        document.getElementById('display').value = eval(displayElements);
    }

    const displayElements = document.getElementById('display').value;

    if (displayElements.startsWith("-")){
        document.getElementById('display').value = displayElements.slice(1);
    } 
    else if (displayElements.startsWith("1") || displayElements.startsWith("2") || displayElements.startsWith("3") || displayElements.startsWith("4") || displayElements.startsWith("5") || displayElements.startsWith("6") || displayElements.startsWith("7") || displayElements.startsWith("8") || displayElements.startsWith("9")){
        document.getElementById('display').value = "-" + displayElements;
    }

}



