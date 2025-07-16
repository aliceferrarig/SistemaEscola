let prompt = require('prompt-sync')();
let alunos = [];
let cursos = [];
let opcao;

do{
   senha = prompt("Digite sua senha: ");

   if(senha=='Senai123')
    console.log("Entrando no sistema...");
   else
    console.log("Senha invalida, tente novamente!");
}while(senha !='Senai123');
  



do {
     opcao = prompt(
    'Sistema Escolar\n' +
    '1 - Cadastrar aluno\n' + 
    '2 - Excluir aluno\n' +
    '3 - Cadastrar curso\n' +
    '4 - Excluir curso\n' +
    '5 - Visualizar informações\n' +
    '6 - Matricular aluno em curso\n' +
    '7 - Sair\n\n' +
    'Escolha uma opção: '
   );
   switch(opcao){

case '1':
//cadastro de novo aluno
let nomealuno = prompt('Digite o nome do aluno: ');
if (nomealuno && nomealuno.trim() !== '') {
alunos.push({ nome : nomealuno.trim(), curso: null})
// adiciona o aluno com o curso nulo (nao matriculado)
console.log('Aluno cadastrado com sucesso!\n');
} else {
console.log('Nome inválido. Tente Novamente.\n');
}
break; 

case '2':
// excluir aluno
let nomeExcluir = prompt('Digite o nome do aluno a ser excluído: ');
let indexaluno = -1;
for (let i = 0; i < alunos.length; i++){
if (alunos[i].nome === nomeExcluir){
indexaluno = i;
break;
}
}
if (indexaluno !== -1) {
alunos.splice(indexaluno, 1);
// remove o aluno do array
console.log('Aluno excluído com sucesso!');
} else {
    console.log('Aluno não encontrado.');
}
break;

case '3':
// cadastrar curso
let nomecurso = prompt('Digite o nome do curso: ');
if (nomecurso && nomecurso.trim() !== '') {
cursos.push({ nome : nomecurso .trim(), curso: null})
// adiciona o curso com o curso nulo (nao matriculado)
console.log('Curso cadastrado com sucesso!\n');
} else {
console.log('Nome inválido. Tente Novamente.\n');
}
break;
                    
case '4':
// excluir curso
let nomeexcluircurso = prompt('Digite o nome do curso a ser excluído: ');
let indexcurso = cursos.indexOf(nomeexcluircurso);
if (indexcurso !== -1) {
cursos.splice(indexcurso, 1);
for (let i = 0; i < alunos.length; i++){
if (alunos[i].curso === nomeexcluircurso) {
alunos[i].curso = null;
break;
}
}
console.log('Curso excluído com sucesso!');
} else {
console.log('Curso não encontrado.');
}
break;

case '5':
console.log('\nAlunos cadastrados:');
if (alunos.length > 0) {
for (let i = 0; i < alunos.length; i++){
let curso;
if (alunos[i].curso) {
curso = alunos[i].curso;
} else {
curso = 'Não matriculado';
}
console.log('- ' + alunos[i].nome + '(Curso: ' + curso + ')');
}
} else {
console.log('Nenhum aluno cadastrado.');
}
console.log('\nCursos cadastrados:');
if (cursos.length > 0) {
for (let i = 0; i < cursos.length; i++){
console.log('- ' + cursos[i]);
}
} else {
console.log('Nenhum curso cadastrado.');
}
break;

case '6':
if (alunos.length === 0 || cursos.length === 0) {
    console.log('É necessário ter alunos e cursos cadastrados para realizar a matrícula');
    break;
}
let nomematricula = prompt('Digite o nome do aluno para matrícula: ');
let aluno = null; 
for (let i = 0; i < alunos.length; i++){
if (alunos[i].nome === nomematricula) {
aluno = alunos[i];
break;
}
}
if (!aluno) {
console.log('Aluno não encontrado.');
break;
}
console.log('Cursos disponíveis:');
for (let i = 0; i < cursos.length; i++) {
console.log((i + 1) + ' - ' + cursos[i].nome);
}
let cursoIndex = parseInt(prompt('Escolha o número do curso:'));
if (cursoIndex >= 0 && cursoIndex < cursos.length) {
aluno.curso = cursos[cursoIndex].nome;
console.log('Aluno ' + aluno.nome + 'Matriculado no curso' + aluno.curso);
} else {
console.log('Curso inválido.');

}
break;

case '7':
// sair do sistema
console.log('Saindo do sistema...');
break;

default:
    console.log('Opção inválida. Tente Novamente');
   } 
}
while (opcao !== '7');



   