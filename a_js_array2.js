const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaAlunos = [10, 8, 7.5, 9 ];

const lista = [alunos, mediaAlunos];

function exibeNomeENota(aluno) { // "aluno" aqui é apenas um identificador do que estamos buscando, poderia ser qualquer palavra
    if(lista[0].includes(aluno)) { // includes é a função que vai buscar algo dentro de um array
        const indice = lista[0].indexOf(aluno); //retorna o indíce da primeira ocorrência do valor fornecido. Então, se eu buscar por um nome, ele vai me devolver a posição desse nome dentro do array
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log("Aluno não existe na lista")
    }
}

exibeNomeENota("Juliana");
exibeNomeENota("Vini");

// Desestruturação

function exibeNomeENota(aluno) { 
    if(lista[0].includes(aluno)) { 
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno); 
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log("Aluno não existe na lista")
    }
}

exibeNomeENota("Caio");
exibeNomeENota("Mari");

// Percorrer uma lista

const notas = [10, 8.5, 5, 6.5, 8, 7.5];

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}

// primeira expressão: executada apenas uma vez (let indice = 0), é uma variável que está sendo iniciada
// segunda expressão: condição de execução (o laço vai continuar repetindo enquanto a condição for verdadeira)
// terceira expressão: executada sempre a final do bloco. Quando o 'for' terminar de fazer tudo o que tem pra fazer, vai executar essa função

const notas1 = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas = 0

for (let i = 0; i < notas1.length; i++) {
    somaDasNotas += notas1[i]; //+= é um INCREMENTADOR
   }

const mediaNotas = somaDasNotas / notas1.length
console.log(`A média das notas é ${mediaNotas}`);

// FOR...OF - similar ao FOR CLÁSSICO, mas não tem as restrições das três expressões

const notas2 = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas2 = 0

for (let nota of notas2) {
    somaDasNotas2 += nota; //+= é um INCREMENTADOR
   }

   const mediaNotas2 = somaDasNotas2 / notas2.length
   console.log(`A média das notas é ${mediaNotas2}`);
