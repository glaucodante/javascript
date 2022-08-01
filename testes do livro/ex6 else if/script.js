// LÓGICA BOOLEANA
// O Q SE ENCONTRA ENTRE PARÊNTESES APÓS O if É A DECISÃO LÓGICA
// METODO if else if
// PARA ESTE MÉTODO PODEMOS USAR O switch

var numeroPassageiros = 23;

if (numeroPassageiros === 0) {
    console.log("O transporte está vazio.");

} else if (numeroPassageiros > 0 && numeroPassageiros < 50) {
    console.log("O transporte tem passageiros.");
} else {
    console.log("O transporte está lotado.");
}