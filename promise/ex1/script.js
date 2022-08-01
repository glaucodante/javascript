function pegarTemperatura() {
    return new Promise(function (resolve, reject) {
        console.log("Pegando Temperatura...");

        setTimeout(function () {
            resolve('40 na sombra');
        }, 2000);

    });
}

// USANDO A PROMISE
console.log("Código antes!");

let temp = pegarTemperatura();

// QUANDO TIVER O RESULTADO, EXECUTA ... DOIS CALLBACKS CRIADOS ABAIXO, UM POSITIVO E UM NEGATIVO

console.log("Código durante!");
//CALLBACK
temp.then(function (resultado) {
    console.log("Temperatura: " + resultado)
});
//CALLBACK
temp.catch(function (error) {
    console.log("Eita! deu erro! ");
});

console.log("Código depois!");

// CODIGO SINCRONO 