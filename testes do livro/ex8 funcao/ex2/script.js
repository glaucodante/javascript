// LÓGICA BOOLEANA
// O Q SE ENCONTRA ENTRE PARÊNTESES APÓS O if É A DECISÃO LÓGICA
// METODO if else if
// PARA ESTE MÉTODO PODEMOS USAR O switch

// UTILIZANDO UMA FUNÇÃO NO EXEMPLO ABAIXO TEREMOS MENOS CÓDIGO

function verificarIdade(nomePessoa, anoDeNascimento) {
    var idade = 2018 - anoDeNascimento;
    if (idade >= 18) {
        console.log(nomePessoa + " é maior de idade.");
    } else {
        console.log(nomePessoa + " tem menos de 18 anos.");
    }
}

var nomePessoa = "joana";
var anoDeNascimento = 2002;
verificarIdade(nomePessoa, anoDeNascimento);

verificarIdade("Cassiano", 1988);

nomePessoa = "John";
anoDeNascimento = 1978;
verificarIdade(nomePessoa, anoDeNascimento);
















// ESTE EXEMPLO UTILIZA MUITO CÓDIGO
// var nomePessoa = "joana";
// var anoDeNascimento = 2002;

// var idade = 2018 - anoDeNascimento;

// if (idade >= 18) {
//     console.log(nomePessoa + " é maior de idade.");
// } else {
//     console.log(nomePessoa + " tem menos de 18 anos.");
// }

// nomePessoa = "Cassiano";
// anoDeNascimento = 1988;

// var idade = 2018 - anoDeNascimento;

// if (idade >= 18) {
//     console.log(nomePessoa + " é maior de idade.");
// } else {
//     console.log(nomePessoa + " tem menos de 18 anos.");
// }
