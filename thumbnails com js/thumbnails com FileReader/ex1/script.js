// MÉTODO LEVEMENTE ASSÍNCRONO

// O RESULTADO É O MESMO, MAS OS CÓDIGOS SÃO DIFERENTES

function mostrar() {
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0];
    // CALLBACK
    reader.onloadend = function () {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }
    reader.readAsDataURL(imagem);

}




// FileReader = LEITOR DE ARQUIVO



// MÉTODO SÍNCRONO

// function mostrar() {
//     let imagem = document.getElementById('imagem').files[0];

//     let img = document.createElement('img');
//     img.src = URL.createObjectURL(imagem);
//     img.width = 200;

//     document.getElementById('area').appendChild(img);

// }