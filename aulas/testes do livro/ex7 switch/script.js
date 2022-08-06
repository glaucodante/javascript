// LÓGICA BOOLEANA
// O Q SE ENCONTRA ENTRE PARÊNTESES APÓS O if É A DECISÃO LÓGICA
// METODO if else if
// PARA ESTE MÉTODO PODEMOS USAR O switch

let nome = "Michele Bunda Seca";
let emprego = "desenvolvedor";

switch (emprego) {
    case "policial":
        console.log(nome + " é ma policial.");
        break;
    case "cozinheiro":
        console.log(nome + " é uma cozinheira.");
        break;
    case "desenvolvedor":
        console.log(nome + " é uma desenvolvedora.");
        break;
    case "lutador":
        console.log(nome + " é uma lutadora.");
        break;
    default:
        console.log(nome + " trabalha em outra coisa.");
}