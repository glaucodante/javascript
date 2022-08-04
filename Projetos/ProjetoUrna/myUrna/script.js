// Variáveis de Controle
let seuVotoPara = document.querySelector('.divisao-1-1 span');
let cargo = document.querySelector('.divisao-1-2 span');
let descricao = document.querySelector('.divisao-1-4');
let aviso = document.querySelector('.divisao-2');
let lateral = document.querySelector('.divisao-1-right');
let numeros = document.querySelector('.divisao-1-3');

// Variáveis de Controle de Ambiente

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    numero = '';
    votoBranco = false;


    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }

    }


    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    // alert('Finalizou de digitar o voto!');
    // console.log("Atualizando Interface");
    // console.log(numero);
    let etapa = etapas[etapaAtual];

    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });

    if (candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

        let fotosHtml = '';
        for (let i in candidato.fotos) {
            if (candidato.fotos[i].small) {
                fotosHtml += `<div class="divisao-1-image small"><img src="images/${candidato.fotos[i].url}" alt="" //>${candidato.fotos[i].legenda}</div>`;
            } else {


                fotosHtml += `<div class="divisao-1-image"><img src="images/${candidato.fotos[i].url}" alt="" //>${candidato.fotos[i].legenda}</div>`;
            }
        }
        lateral.innerHTML = fotosHtml;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';

    }

    // console.log('candidato', candidato);

}


// Variáveis de Funções 
function clicou(n) {
    // Foi colocado o nome da variavel de elNumero, pois já tem uma variável de nome numero
    // alert("Clicou em " + n);
    let elnumero = document.querySelector('.numero.pisca');
    // símbolo de diferente é (!==)
    if (elnumero !== null) {
        elnumero.innerHTML = n;
        numero = `${numero}${n}`;

        elnumero.classList.remove('pisca');
        // nextElementSibling = Pega o proximo numero (elemento) e adiciona o pisca
        if (elnumero.nextElementSibling !== null) {
            elnumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}

function branco() {
    if (numero === '') {
        votoBranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    } else {
        alert('Para votar em BRANCO, não digite nenhum número.')
    }
}

function corrige() {
    comecarEtapa();
}

function confirma() {
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;

    if (votoBranco === true) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });
    } else if (numero.length === etapa.numeros) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        });

    }

    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa();
        } else {
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>';
            console.log(votos);
        }

    }
}


comecarEtapa();