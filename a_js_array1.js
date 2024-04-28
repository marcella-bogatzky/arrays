// Para verificar o console no VSCode, basta abrir o Terminal e digitar "node nome_do_arquivo.js"

//const nota1 = 10;
//const nota2 = 6.5;
//const nota3 = 8;
//const nota4 = 7.5;
//const media = (nota1 + nota2 + nota3 + nota4) / 4

const notas = [10, 6.5, 8, 7.5]; //"const" é o mesmo que "var", mas é usando quando as infomações são constantes e não variáveis

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log('A média do primeiro exercício é ' + media);

// Array é uma lista de elementos. Essa lista possui itens/elementos e esses elementos são identificados por índices (posição onde o elemento está). O indíce sempre começa em zero.

//notas[0] acessa o elemento "10". notas[2] acessa o elemento "8".

// O array aceita qualquer tipo de dados. Ou seja, a lista pode ser composta de números, string, outros arrays, etc

const notas1 = [10, 6, 8];
notas1.push(7) //"push" é um MÉTODO, uma FUNÇÃO usado para acrescentar um novo elemento no array

const media1 = (notas1[0] + notas1[1] + notas1[2] + notas1[3]) / notas1.length;

console.log('A média do segundo exercício é ' + media1)

// Para excluir elementos, a gente utilizará o MÉTODO "pop"

const notas2 = [10, 6, 8, 5.5, 10];

notas2.pop();

const media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length;

console.log('A média do terceiro exercício é ' + media2);
console.log('A média do terceiro exercício, com somente duas casas decimais, é ' + media2.toFixed(2)) // O método toFixed serve para limitar o número de casas decimais no resultado

const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2); // Método slice "corta" a lista. Ela deve receber duas informações: o índice do inicío do corte e o índice do fim (sendo que o valor do fim não é incluso)
const sala2 = listaEstudantes.slice(listaEstudantes.length/2)

console.log('A Sala 1 será composta pelos seguintes estudantes: ' + sala1);
console.log('A Sala 2 será composta pelos seguintes estudantes: ' + sala2);

// Manipulando arrays

const listaEstudantes1 = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
listaEstudantes1.splice(1,2,'Rodrigo'); // Splice pode servir para excluir elementos específicos do array. Ele deve receber duas informações: o índice do início da exclusão e quantos valores devem ser excluídos e pode receber a informação do valor que deve ser inserido no lugar

console.log(listaEstudantes1)

const salaJS = ['Evaldo', 'Camis', 'Mari']
const salaPython = ['Ju', 'Leo', 'Raquel']

const salasUnificadas = salaJS.concat(salaPython); //"concat" serve para concatenar os dois arrays
//Se utilizar "const salasUnificadas = salaJS + salaPython" ele vai juntar os valores de ambos arrays, mas não criará um array novo
console.log(salasUnificadas);

// Array de duas dimensões (arrays dentro de arrays)
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaAlunos = [10, 8, 7.5, 9 ];

const lista = [alunos, mediaAlunos]

console.log(
    `A aluna da posição 1 da lista é a ${lista[0][1]}.
    A nota dessa aluna é ${lista[1][1]}.` // Estamos usando dois valores em [] porque criamos um novo array chamado lista. Ou seja para acessar o array dentro desse array, precisamos (1) localizar o elemendo dentro do array "lista" e, (2) localizar o elemento dentro do array alunos ou mediaAlunos
)

// O símbolo `` serve pra auxiliar a concatenação quando há string. Usamos ${} para fazer a concatenação dentro do `` (Essa técnica é chamada de "template string")