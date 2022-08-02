// el = ELEMENTO
// A CONSTANTE ABAIXO IRÁ SUBSTITUIR O document.querySelector()

// const c = (el) => {
//     return document.querySelector(el);
// }
// SIMPLIFICANDO
const c = (el) => document.querySelector(el);

const cs = (el) => document.querySelectorall(el);

// LISTANDO AS PIZZAS
pizzaJson.map((item, index) => {

    // CLONA A ESTRUTURA JOGA NA TELA DE pizza-item no HTML
    // PREENCHER AS INFORMAÇÕES DE pizza-item
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);

    // SELECIONANDO A PIZZA, ESPECÍFICA, Q ESTÁ NO MODAL EM DETERMINADO MOMENTO
    pizzaItem.setAttribute('data-key', index);


    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    // tofixed = PARA FIXARR AS CASAS DECIMAIS DO PREÇO
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;


    // AQUI ESTÁ O MODAL 
    // CANCELANDO O EVENTO DE CLICK Q ATUALIZAVA A PIZZA E O (...  )
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        // closet = ACHE O ELEMENTO MAIS PRÓXIMO Q TENHA ...
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        // console.log('pizza clicada: ' + key);
        // console.log(pizzaJson[key]);

        // PREENCHENDO O NOME DA PIZZA NO MODAL, QUANDO HOUVER O CLIQUE

        // = C
        document.querySelector('.pizzaBig img').src = pizzaJson[key].img;
        document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;


        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';

        // COMANDO PARA FAZER A PEQUENA ANIMAÇÃO - EFEITO DE CLIQUE ENTRANDO NA TELA
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200);


    });

    // append = ADICIONA CONTEUDO
    document.querySelector('.pizza-area').append(pizzaItem);

});

// VAI SELECIONAR A PIZZA Q ESTARÁ NO MODAL