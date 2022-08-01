
// UTILIZANDO O async e await
async function loadPosts() {
    document.getElementById('posts').innerHTML = ' Carregando...';

    // OUTRA
    // AQUI TEMOS UMA REQUISIÇÃO ASSÍNCRONA

    // AGORA UTILIZANDO O await
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montarBlog(json);
    // MENOS CÓDIGO DO QUE O EXEMPLO ABAIXO

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(function (resultado) {
    //         return resultado.json();
    //     })
    //     .then(function (json) {
    //         montarBlog(json);
    //     })
    //     .catch(function (error) {
    //         console.log('Deu problema!');
    //     });
}

function montarBlog(lista) {
    let html = '';

    for (let i in lista) {
        // CONCATENANDO AUMENTANDO O CONTEÚDO
        html += '<h3>' + lista[i].title + '</h3>';
        html += lista[i].body + '<br/>';
        html += '<hr/>';
    }
    // OUTRA FORMA
    // for (let i = 0; i < lista.length; i++) {}

    document.getElementById('posts').innerHTML = html;
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