
/* SCROL OU BARRA DE ROLAGEM DA PRÓPRIA TELA => window.scrollY OU window.scrollX  */
// X => HORIZONTAL
// Y => VERTICAL


// CRIANDO BOTÃO PARA SUBIR A TELA

function subirTela() {
    window.scrollTo({
        top: 0,
        // left: 0, SE HOUVESSE SCROLL HORIZONTAL
        behavior: "smooth"
    });
    // COLOCANDO O COMANDO PARA FAZER UMA SUBIDA DE TELA SUAVE
    // behavior = COMPORTAMENTO => smooth = SUAVE
}


// FUNÇÃO PARA FAZER APARECER OU NÃO O BOTÃO
function decidirBotaoScroll() {
    if (window.scrollY === 0) {
        // OCULTAR BOTÃO
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        // MOSTRAR BOTÃO
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

//ADD EVENTO QUE VAI MONITORAR O SROLL DA TELA

window.addEventListener('sroll', decidirBotaoScroll);



// FUNÇÃO COLOCADA COM TIME
//setInterval(decidirBotaoScroll, 1000); // 1000 = 1000 MILISEGUNDOS = 1 SEGUNDO