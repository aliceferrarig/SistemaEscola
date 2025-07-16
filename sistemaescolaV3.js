let prompt = require('prompt-sync')();
let alunos = [];
let cursos = [];

function cadastraraluno(){
    let nomealuno = prompt('Digite o nome do aluno: ');
if (nomealuno && nomealuno.trim() !== '') {
alunos.push({ nome : nomealuno.trim(), curso: null})
console.log('Aluno cadastrado com sucesso!\n');
} else {
console.log('Nome inválido. Tente Novamente.\n');
}
}

function excluiraluno(){
    let nomeExcluir = prompt('Digite o nome do aluno a ser excluído: ');
let indexaluno = -1;
for (let i = 0; i < alunos.length; i++){
if (alunos[i].nome === nomeExcluir){
indexaluno = i;
break;
}
}
  if (indexAlunoEncontrado !== -1) {
    alunos.splice(indexAlunoEncontrado, 1);
    console.log("Aluno excluído com sucesso!");
  } else {
    console.log("Aluno não encontrado.");
  }
}

function cadastrarcurso(){
    let nomecurso = prompt('Digite o nome do curso: ');
if (nomecurso && nomecurso.trim() !== '') {
cursos.push({ nome : nomecurso .trim(), curso: null})
console.log('Curso cadastrado com sucesso!\n');
} else {
console.log('Nome inválido. Tente Novamente.\n');
}
}

function excluircurso() {
  let nomeExcluirCurso = prompt("Digite o nome do curso a ser excluído:");
  let indexCursoEncontrado = cursos.indexOf(nomeExcluirCurso);
  if (indexCursoEncontrado !== -1) {
    cursos.splice(indexCursoEncontrado, 1);
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].curso === nomeExcluirCurso) {
        alunos[i].curso = null;
      }
    }
    console.log("Curso excluído com sucesso!");
  } else {
    console.log("Curso não encontrado.");
  }
}

function visualizarInformacoes() {
  console.log("\nAlunos Cadastrados:");
  if (alunos.length > 0) {
    for (let i = 0; i < alunos.length; i++) {
      let statusCurso = alunos[i].curso ? alunos[i].curso : "Não matriculado";
      console.log("- " + alunos[i].nome + " (Curso: " + statusCurso + ")");
    }
  } else {
    console.log("Nenhum aluno cadastrado.");
  }

  console.log("\nCursos Cadastrados:");
  if (cursos.length > 0) {
    for (let i = 0; i < cursos.length; i++) {
      console.log("- " + cursos[i]);
    }
  } else {
    console.log("Nenhum curso cadastrado.");
  }
}

function matriculandoAlunoEmCurso() {
  // Verifica se há alunos e cursos cadastrados para poder realizar a matrícula
  if (alunos.length === 0 || cursos.length === 0) {
    console.log(
      "É necessário ter alunos e cursos cadastrados para realizar a matrícula."
    );
    return; // Sai da função
  }

  let nomeMatricula = prompt("Digite o nome do aluno para matrícula:");
  let alunoEncontrado = null; // Variável para armazenar o aluno encontrado
  // Percorre o array de alunos para encontrar o aluno pelo nome
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome === nomeMatricula) {
      alunoEncontrado = alunos[i]; // Atribui o aluno encontrado à variável
      break; // Sai do loop
    }
  }

  // Verifica se o aluno foi encontrado
  if (!alunoEncontrado) {
    console.log("Aluno não encontrado.");
    return; // Sai da função
  }

  // Exibe os cursos disponíveis
  console.log("Cursos disponíveis:");
  // Percorre o array de cursos e exibe cada um com um número para seleção
  for (let i = 0; i < cursos.length; i++) {
    console.log(i + 1 + " - " + cursos[i]);
  }

  let cursoEscolhidoIndex = parseInt(prompt("Escolha o número do curso:")) - 1;

  // Verifica se o número do curso digitado é válido
  if (cursoEscolhidoIndex >= 0 && cursoEscolhidoIndex < cursos.length) {
    // Atribui o curso escolhido ao aluno encontrado
    alunoEncontrado.curso = cursos[cursoEscolhidoIndex];
    console.log(
      "Aluno " +
        alunoEncontrado.nome +
        " matriculado no curso " +
        alunoEncontrado.curso +
        "."
    );
  } else {
    console.log("Curso inválido.");
  }
}

let opcao;
let senhacorreta = 'senai123'
let tentativasenha = 0;

while (tentativasenha < 3) {
    let senhaDigitada = prompt('Digite a senha para acessar o sistema: ')
    if (senhaDigitada === senhacorreta){
        console.log('Senha correta! Acesso concedido.');
        break; 
    } else  {
        tentativasenha++; 
        console.log(
            'Senha incorreta. Tentativas restantes:'+(3 - tentativasenha)
        );
    
    }
}
if (tentativasenha === 3){
     console.log('Acesso não autorizado. Você excedeu o número de tentativas');
     process.exit();
}


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
cadastraraluno();
break; 

case '2':
excluiraluno();
break;

case '3':
cadastrarcurso();
break;
                    
case '4':
excluircurso();
break;

case '5':
visualizarInformacoes();
break;

case '6':
matriculandoAlunoEmCurso();
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

