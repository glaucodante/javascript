function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if (menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
}

// DUAS FORMAS DE FAZER O MENU ENTRAR E SAIR NA LATERAL DIREITA DA TELA