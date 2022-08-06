
async function enviar() {
    let arquivo = document.getElementById('arquivo').files[0];
    // PARA FAZER O UPLOAD

    // PARA ENVIAR ARQUIVOS UTILIZAR A CLASS new FormData()

    let body = new FormData();
    body.append('title', 'Blá blá blá');
    body.append('arquivo', arquivo);


    let req = await fetch('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-type': 'multipart/form-data'
        }
    });

}