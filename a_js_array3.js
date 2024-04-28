const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota) { // o parâmetro "nota" é o que vai guardar cada informação dentro do forEach
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length

console.log(`a média das notas é ${media}`)