mario = document.querySelector('.mario');
pipe = document.querySelector('.pipe');
clouds = document.querySelector('.clouds');
textStart = document.querySelector('.textStart');
points = document.querySelector('#contador');

let contador = 0;

// Função Start do Game
const start = () => {

  textStart.style.color = "rgb(236,236,236)";

  pipe.classList.add('pipe-animation');
  mario.style.width = "150px";
  mario.style.marginLeft = "50px";
  mario.src = "./images/mario.gif";
  clouds.classList.add('clouds-animation-movement');

}

document.addEventListener('click', start);

// Função Pulo
const jump = () => {
  mario.classList.add('jump');
  mario.src = "./images/jumpmario.png"
  mario.style.width = "85px";

  setTimeout(() => {
    mario.classList.remove('jump');
    mario.src = "./images/mario.gif";
    mario.style.width = "150px";
  }, 1500);
}

document.addEventListener('keydown', jump);

// Função para atualizar o score
const updateScore = () => {
  contador++
  points.innerText = contador;
}

// Função GameOver

const checkGameOver = setInterval(() => {

  const pipePostion = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', "");

  if (pipePostion <= 120 && pipePostion > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePostion}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/gameover.png";
    mario.style.width = "120px";
    mario.style.marginLeft = "5px";

    clouds.style.animationPlayState = 'paused';
  }

  if (pipePostion <= 60 && pipePostion > 0 && marioPosition >= 80) {
    updateScore();
  }

}, 10);