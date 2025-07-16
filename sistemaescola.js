let prompt = require('prompt-sync')();
// arrays para armazenar alunos e cursos
let alunos = [];
let cursos = [];
let opcao;

do{
    // menu de opções
   opcao = prompt(
    'Sistema Escolar\n' +
    '1 - Cadastrar aluno\n' + 
    '2 - Excluir aluno\n' +
    '3 - Cadastrar curso\n' +
    '4 - Excluir curso\n' +
    '5 - Visualizar informações\n' +
    '6 - Sair\n\n' +
    'Escolha uma opção: '
   );
    switch(opcao){

        case '1':
            // cadastrar aluno
            let nomealuno = prompt('Digite o nome do aluno: ');
            if (nomealuno && nomealuno.trim() !== '') {
            alunos.push(nomealuno.trim());
            console.log('Aluno cadastrado com sucesso!\n');
             } else {
            console.log('Nome inválido. Tente Novamente.\n');
   }
            break; 
            
        case '2':
            // excluir aluno
            let nomeExcluir = prompt('Digite o nome do aluno a ser excluído: ');
            let indexaluno = alunos.indexOf(nomeExcluir.trim());
            if (indexaluno !== -1) {
                alunos.splice(indexaluno, 1);
                console.log('Aluno excluído com sucesso!\n');
            } else {
                console.log('Aluno não encontrado.\n');
            }
        
            break;

        case '3':
            // cadastrar curso
            let nomecurso = prompt('Digite o nome do curso: ');
            if (nomecurso !== null && nomecurso.trim() !== '') {
                cursos.push(nomecurso.trim());
                console.log('Curso cadastrado com sucesso!\n');
            } else {
                console.log('Nome inválido. Tente Novamente.\n');
            }
            break;   
            
        case '4':
            // excluir curso
            let cursoExcluir = prompt('Digite o nome do aluno a ser excluído: ');
            let indexcurso = curso.indexOf(cursoExcluir.trim());
            if (indexcurso !== -1) {
                curse.splice(indexcurso, 1);
                console.log('Curso excluído com sucesso!\n');
            } else {
                console.log('Curso não encontrado.\n');
            }
         break;

        case '5':
            // visualizar informações
            let info = '\nAlunos Cadastrados:\n';
            if (alunos.length > 0) {
                for (let i = 0; i < alunos.length; i++ ) {
                    info += '- ' + alunos[i] + '\n';
                }
            } else {
                info += 'Nenhum aluno cadastrado.\n';
            }
            info += '\nCursos cadastrados:\n';
            if (cursos.length > 0) {
                for (let i = 0; i < cursos.length; i++){
                    info += '- ' + cursos[i] + '\n';
                }
            } else {
                info += 'Nenhum curso cadastrado.\n';
            }

            console.log(info);
            break;

        case '6':
            // sair do sistema
            console.log('Saindo do sistema...');
    break;

   default:
            console.log('Opção inválida. Tente Novamente.\n');
} } while  (opcao !== '6')


