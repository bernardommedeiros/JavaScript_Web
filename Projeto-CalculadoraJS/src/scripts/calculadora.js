
function insertElement(element) {
    const display = document.getElementById('display');
    const currentValue = display.value;

    if (currentValue === '' && (element == 0 || element == 1 || element == 2 || element == 3 || element == 4 || element == 5 || element == 6 || element == 7 || element == 8 || element == 9)) {
        display.value += element;
    }
    else if (currentValue !== '') {

        const operators = ['+', '-', '*', '/', '%'];
        const lastElement = currentValue.charAt(currentValue.length - 1);

        if (operators.includes(lastElement) && operators.includes(element)) {
            return;
        } else {
          
            display.value += element;
        }
    }
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
    const display = document.getElementById('display');
    const currentValue = display.value;

    const percentageIndex = currentValue.indexOf('%');
   
       
    const beforePercentage = currentValue.substring(0, percentageIndex);
    const afterPercentage = currentValue.substring(percentageIndex + 1);

    if (beforePercentage && afterPercentage) {
        const baseValue = parseFloat(beforePercentage);
        const percentageValue = parseFloat(afterPercentage);

        display.value = (baseValue * percentageValue) / 100;
    } 
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


