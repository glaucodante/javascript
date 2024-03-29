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

// INSERINDO AÇÕES NO BOTÃO CARRINHO MOBILE
document.querySelector('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        document.querySelector('aside').style.left = '0';
    }
});

// INSERINDO O OPÇÃO DE FECHAR O CORRINHO NO MOBILE
document.querySelector('.menu-closer').addEventListener('click', () => {
    document.querySelector('aside').style.left = '100vw';
});

// ATUALIZANDO INFORMAÇÕES DO CARRINHO DE COMPRAS

function updateCart() {
    // INSERINDO INFORMAÇÕES NO CARRINHO VERSÃO MOBILE
    document.querySelector('.menu-openner span').innerHTML = cart.length;


    // CASO TENHA ITENS NO CARRINHO IRÁ MOSTRAR
    if (cart.length > 0) {
        // show = APARECER
        c('aside').classList.add('show');
        // ZERANDO O CARRINHO
        c('.cart').innerHTML = '';

        // CALCULANDO OS PREÇOS

        let subtotal = 0;
        let desconto = 0;
        let total = 0;




        // PARA MAPEAR O CARRINHO
        for (let i in cart) {
            // RETORNA OS ITENS DA PIZZA
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id);
            // return item.id = cart[i].id;

            // CALCULANDO OS PREÇOS
            // ( += ) VAI AUMENTAR => PREÇO VEZES O PREÇO DO ITEM DO CARRINHO
            subtotal += pizzaItem.price * cart[i].qt;


            let cartItem = c('.models .cart--item').cloneNode(true);
            // PREENCHENDO O TAMANHO DA PIZZA
            let pizzaSizeName;

            switch (cart[i].size) {

                case 0:
                    pizzaSizeName = 'P';
                    break;

                case 1:
                    pizzaSizeName = 'M';
                    break;

                case 2:
                    pizzaSizeName = 'G';
                    break;


            }

            // INSERINDO NO CARRINHO O TAMANHO DA PIZZA
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[i].qt > 1) {
                    cart[i].qt--;

                } else {
                    // RETIRANDO O ITEM DO CARRINHO
                    cart.splice(i, 1);
                }

                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++;
                // IRÁ REATUALIZAR O CARRINHO E TBM FECHARÁ O CARRINHO QUANDO NAO HOUVER ITENS
                updateCart();
            });



            // MOSTRANDO ITENS DO CARRINHO
            c('.cart').append(cartItem);
        }

        // CALCULANDO OS PREÇOS
        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        // EXIBINDO NA TELA OS VALORES
        // last-chuld = PEGAR O ÚTIMO ITEM (DO SPAN)
        // tofixed(2) = IRÁ FIXAR O PREÇO EM DUAS CASAS DECIMAIS
        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;



    } else {
        // REMOVE 
        c('aside').classList.remove('show');
        // FECHANDO CARRINHO MOBILE QUANDO INSERIR A QUANTIDADE ZERO
        c('aside').style.left = '100vw';

    }
}