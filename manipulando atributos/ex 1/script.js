
function trocarImagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'images/' + filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
}