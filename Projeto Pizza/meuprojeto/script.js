// CARRINHO
let cart = [];
// Qt = QUANTIDADE
let modalQt = 1;
let modalKey = 0;



// el = ELEMENTO
// A CONSTANTE ABAIXO IRÁ SUBSTITUIR O document.querySelector()

// const c = (el) => {
//     return document.querySelector(el);
// }
// SIMPLIFICANDO
const c = (el) => document.querySelector(el);

const cs = (el) => document.querySelectorAll(el);

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

        // RESETANDO A QUANTIDADE PARA O PADRÃO DE 1
        modalQt = 1;
        // ETERNIZANDO O MOMENTO DA PIZZA - SALVANDO A PIZZA SELECIONADA
        // DIZENDO QUAL É A PIZZA
        modalKey = key;

        // console.log('pizza clicada: ' + key);
        // console.log(pizzaJson[key]);

        // PREENCHENDO O NOME DA PIZZA NO MODAL, QUANDO HOUVER O CLIQUE

        // = C
        document.querySelector('.pizzaBig img').src = pizzaJson[key].img;
        document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        // RETIRANDO A  SELEÇÃO DA PIZZA SELECIONADA NO MODAL
        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');


        // INSERINDO O PESO DAS PIZZAS - INICIO DO COMANDO
        document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex) => {

            // QUANDO sizeIndex FOR IGUAL A 2 ELE IRÁ SELECIONAR
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }

            // INSERINDO O PESO DAS PIZZAS - COMANDO ESPECIFICO
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        // INSERINDO A QUANTIDADE 1 DE PIZZA
        c('.pizzaInfo--qt').innerHTML = modalQt;

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


// EVENTOS (AÇÕES) DO MODAL

function closeModal() {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none';
    }, 500);
}
// INSERINDO AÇÕES NO BOTÕES DE CANCELAR E VOLTAR(MOBILE)
document.querySelectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

// BOTOES DE QUANTIDADE

c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
        modalQt--;
        c('.pizzaInfo--qt').innerHTML = modalQt;
    }
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;
});

document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        // TIRANDO A SELEÇÃO DO ITEM
        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
        // INSERINDO A SELEÇÃO NO NOVO ITEM
        size.classList.add('selected');

    });

});

// AÇÃO DOS BOTÕES

document.querySelector('.pizzaInfo--addButton').addEventListener('click', () => {
    // NO CARRINHO DE COMPRAS
    // QUAL A PIZZA?
    // console.log('Pizza: ' + modalKey);
    // QUAL O TAMANHO?
    // parseInt = TRANFORMA UMA string EM Nº INTEIRO
    let size = parseInt(document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key'));
    // console.log('Tamanho: ' + size);
    // QUANTAS PIZZAS?
    // console.log('Quantidade: ' + modalQt);

    // CRIANDO IDENTIFICADOR PARA JUNTAR O ID DA PIZZA COM O TAMANHO DELA
    // O @ (ARROBA) ESTÁ FUNCIONANDO COMO O IDENTIFIER
    let identifier = pizzaJson[modalKey].id + '@' + size;
    // VERIFICANDO SE ALGUM ITEM JÁ ESTÁ NO CARRINHO
    // QUANDO FOR UMA VERFICAÇÃO DEVO USAR DOIS IGUAIS (==)
    // DESSA FORMA=> item.identifier == identifier (É UMA CONDIÇÃO, NAO MUDANÇA DE VALOR)
    let key = cart.findIndex((item) => item.identifier == identifier);
    // return item.identifier = identifier; OUTRA FORMA DE FAZER ACIMA

    if (key > -1) {
        cart[key].qt += modalQt;
    } else {

        // ADICIONANDO NO CARRINHO DE COMPRAS
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size,
            qt: modalQt
        });
    }
    // ATUALIZAR O CARRINHO
    updateCart();
    // FECHANDO O MODAL
    closeModal();

});

// ATUALIZANDO INFORMAÇÕES DO CARRINHO DE COMPRAS

function updateCart() {
    if (cart.length > 0) {
        // show = APARECER
        c('aside').classList.add('show');
        // PARA MAPEAR O CARRINHO
        for (let i in cart) {
            // RETORNA OS ITENS DA PIZZA
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
            // return item.id = cart[i].id;

            let cartItem = c('.models .cart--item').cloneNode(true);

        }

    } else {
        // REMOVE 
        c('aside').classList.remove('show');

    }
};