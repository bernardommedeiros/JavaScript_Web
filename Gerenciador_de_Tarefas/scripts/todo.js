let input = document.getElementById('input');
let add = document.getElementById('add');
let main = document.getElementById('contentArea');
let i = 0;

function addReminder(){
    let inputContent = input.value;

    if(inputContent !== '' && inputContent !== null && inputContent !== undefined){
        ++i;
        let newReminder = `<div id="${i}" class="inicial">
        
                <div onclick="finished(${i})" class="botao_concluir">
                    <img src="../components/circle.svg" alt="">
                </div>
                <div class="tarefa">
                    <p> ${inputContent} </p>
                </div>
                <div class="botao_editar">
                    <img src="../components/edit.svg" alt="">
                </div>
                <div onclick="deleteContent(${i})" class="botao_excluir">
                    <img src="../components/trash.svg" alt="">
                </div>
        
        </div>`

        main.innerHTML += newReminder;
        input.value = '';
        input.focus();
        }
}  

function deleteContent(i){
    let content = document.getElementById(i);
    content.remove();
}

function finished(i){
    let content = document.getElementById(i);
    let newReminder = {
        ` <div class="clicado">
        
        <div class="botao_concluir">
            <img src="../components/circle-check-big (2).svg" alt="">
        </div>
        <div class="tarefa">
            <p> ${inputContent} </p>
        </div>
        <div class="botao_editar" id="hidden">
            <img src="../components/edit.svg" alt="">
        </div>
        <div class="botao_excluir">
            <img src="../components/trash.svg" alt="">
        </div>
    
    </div>`
    }
}

