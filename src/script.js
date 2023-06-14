let botaoClicado = false;
let botaoPassadoPorCima = false;
let contadorAcoes = 0;

function moverBotaoNao() {
  if (!botaoClicado && !botaoPassadoPorCima) {
    return; // Mantém o botão "Não" na posição fixa inicial
  }

  const botaoNao = document.getElementById("botao-negativo");
  const larguraJanela = document.documentElement.clientWidth;
  const alturaJanela = document.documentElement.clientHeight;

  const larguraBotao = botaoNao.offsetWidth;
  const alturaBotao = botaoNao.offsetHeight;

  const posicaoEsquerda = Math.floor(Math.random() * (larguraJanela - larguraBotao));
  const posicaoTopo = Math.floor(Math.random() * (alturaJanela - alturaBotao));

  const posicaoEsquerdaMaxima = larguraJanela - larguraBotao;
  const posicaoTopoMaxima = alturaJanela - alturaBotao;

  botaoNao.style.position = "absolute";
  botaoNao.style.left = Math.min(posicaoEsquerda, posicaoEsquerdaMaxima) + "px";
  botaoNao.style.top = Math.min(posicaoTopo, posicaoTopoMaxima) + "px";
}

document.addEventListener("DOMContentLoaded", function () {
  const botaoNao = document.getElementById("botao-negativo");
  const gif = document.getElementById("gif");

  botaoNao.addEventListener("touchend", function () {
    botaoClicado = true;
    gifClicked = true;
    contadorAcoes++;
    if (contadorAcoes >= 5) {
      gif.style.display = "inline";
    }
    moverBotaoNao();
  });

  botaoNao.addEventListener("mouseover", function () {
    if (!botaoClicado) {
      botaoPassadoPorCima = true;
      contadorAcoes++;
      if (contadorAcoes >= 5) {
        gif.style.display = "inline";
      }
      moverBotaoNao();
    }
  });
});

let clickCount = 0;
let gifClicked = false;

function ocultarGif() {
    const gif = document.getElementById("gif");

    clickCount++;

    if (!gifClicked && clickCount >= 5) {
        gif.style.display = "inline";
    }
}

function reproduzirVideo() {
    const videoContainer = document.getElementById("video-container");
  
    gifClicked = true;
    videoContainer.style.display = "flex";
    const video = document.getElementById("video");
    video.play();
  }
  
  
  
  



