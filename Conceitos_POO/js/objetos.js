// objetos -> utilizar const

const pessoa = {
    nome: 'Bernardo',
    sobrenome: 'Medeiros',
    idade: 19,
    endereco: {
        rua: 'Salgado Filho',
        faculdade: IFRN
    },
    profissao: 'Desenvolvedor Front-End',
    skills: ['JS', 'CSS', 'HTML'],
    aniversario: function() {
        alert('Feliz aniversário' + ", " + this.nome);
    },

    completo: function() {
        return document.getElementById("texto").innerHTML = ("O aluno " + this.nome + " " + "Estuda na instituição " + this.endereco.faculdade + " Na Avenida " + this.endereco.rua + ". Buscando vagas como " + this.profissao + " Se destaca nas tecnologias " + this.skills);
    }
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['idade']);


document.addEventListener('DOMContentLoaded', function() {
    pessoa.aniversario();
    pessoa.completo();
});