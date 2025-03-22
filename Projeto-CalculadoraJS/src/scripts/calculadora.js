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

// PORCENTAGEM
function percentage() {
    
}


// TROCAR SINAL
function not() {
    const displayElements = document.getElementById('display').value;
    
    document.getElementById('display').value = eval(displayElements);

    const calculatedElements = document.getElementById('display').value;

    if (calculatedElements.startsWith("-")){
        document.getElementById('display').value = displayElements.slice(1);
    } 
    else if (calculatedElements.startsWith("1") || calculatedElements.startsWith("2") || calculatedElements.startsWith("3") || calculatedElements.startsWith("4") || calculatedElements.startsWith("5") || calculatedElements.startsWith("6") || calculatedElements.startsWith("7") || calculatedElements.startsWith("8") || calculatedElements.startsWith("9")){
        document.getElementById('display').value = "-" + calculatedElements;
    }

}


