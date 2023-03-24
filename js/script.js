const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const restartBtn = document.querySelector('.restart');
let gameOver = false; // Nova variável gameOver

const jump = () => {
  if (!gameOver) { // Verifica se gameOver é false
    mario.classList.add('jump');
    mario.src = './images/jumpmario.png';
    mario.style.width ='85px'; 
    setTimeout(()=> {
      mario.classList.remove('jump');
      if (!gameOver) { // Verifica se gameOver é false
        mario.src = './images/mario.gif';
        mario.style.width = '150px';
      }
    }, 500);
  }
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if(pipePosition <= 140 && pipePosition> 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/gameover.png';
    mario.style.width = '120px';
    mario.style.marginLeft = '20px';

    clouds.style.animationPlayState = 'paused'; // Pausa a animação das nuvens
    
    gameOver = true; // Define gameOver como true

    restartBtn.style.display = "block";
    restartBtn.addEventListener('click', restartGame)

    clearInterval(loop);
  }
}, 10)

const restartGame = () => {
  restartBtn.style.display = "none";
  gameOver = false;
}

document.addEventListener('click', jump);
document.addEventListener('keydown', jump);
