let input = document.getElementById('input');
let add = document.getElementById('add');
let main = document.getElementById('contentArea');
let i = 0;

function addReminder(){
    let inputContent = input.value;

    if(inputContent !== '' && inputContent !== null && inputContent !== undefined){
        ++i;
        let newReminder = `<div id="${i}" class="inicial" class="clicado">
        
                <div ondblclick="restore(${i})" onclick="finished(${i})" class="botao_concluir">
                    <img id="icone_${i}" src="../components/circle.svg" alt="">
                </div>
                <div ondblclick="restore(${i})" onclick="finished(${i})" class="tarefa">
                    <p> ${inputContent} </p>
                </div>
                <div onclick="editContent(${i})" id="editContent" class="botao_editar">
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

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const element = document.getElementById('add');
        if (element) {
            element.click(); 
        }
    }
});

function finished(i) {
    let content = document.getElementById(i);
    let className = content.getAttribute('class');

    if (className === "inicial") {
        content.classList.add('clicado');

        let icon = document.getElementById("icone_" + i);
        icon.src = "../components/circle_check.svg";

    }
}

function restore(i) {
    let content = document.getElementById(i);

    if (content.classList.contains('clicado')) {

        content.classList.remove('clicado');
        content.classList.add('inicial');

        let icon = document.getElementById("icone_" + i);
        icon.src = "../components/circle.svg";

    }
}


