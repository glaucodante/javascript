
// UTILIZANDO O async e await
async function inserirPosts() {
    document.getElementById('posts').innerHTML = ' Carregando...';


    // AQUI TEMOS UMA REQUISIÇÃO ASSÍNCRONA

    // AGORA UTILIZANDO O await
    // INSERIONDO O SEGUNDO PARAMETRO APOS A VIRGULA

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // QUANDO EU ESTOU UTILIZANDO O MÉTODO DE REQUISIÇÃO POST 
        // POSSO ENVIAR DADOS ATRAVÉS DO CORPO DA REQUISIÇÃO
        method: 'POST',
        body: JSON.stringify({
            title: 'Título de teste',
            body: 'Corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    let json = await req.json();

    console.log(json);
}







// No geral, requisições Assíncronas devem prevalecer sobre requisições síncronas por questões de performance.



// <hr/> INSERE LINHA HORIZONTAL








 // fetch = RETORNA UMA PROMESSA
    // UMA OPÇÃO
    // let req = fetch();
    // req.then();

    // OUTRA OPÇÃO
    // fetch().then();


    // function loadPosts() {
    //     // OUTRA
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(function (resultado) {
    //             console.log(resultado);
    //         })
    //         .catch(function (error) {
    //             console.log('Deu problema!');
    //         });
    // }