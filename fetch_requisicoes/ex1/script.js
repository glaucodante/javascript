function loadPosts() {
    document.getElementById('posts').innerHTML = ' Carregando...';

    // OUTRA
    // AQUI TEMOS UMA REQUISIÇÃO ASSÍNCRONA
    // No geral, requisições Assíncronas devem prevalecer sobre requisições síncronas por questões de performance.
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resultado) {
            return resultado.json();
        })
        .then(function (json) {
            document.getElementById('posts').innerHTML = json.length + ' posts';
        })
        .catch(function (error) {
            console.log('Deu problema!');
        });
}

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