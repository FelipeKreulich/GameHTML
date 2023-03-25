hero = document.querySelector('.hero');
cacto = document.querySelector('.cacto');
textStart = document.querySelector('.textStart');
cloud = document.querySelector('.cloud');
floor1 = document.querySelector('.floor1');
floor2 = document.querySelector('.floor2');
floor3 = document.querySelector('.floor3');
gameOverText = document.querySelector('.gameOverText');
points = document.querySelector("#contador");
audioStart = new Audio('./audio/theme.mp3');
audioGameOver = new Audio('./audio/gameover.mp3');

let contador = 0;

// Função para Iniciar o Game
const start = () => {

  textStart.style.color = "rgb(189, 189, 189)";

  hero.style.display = "block";

  cacto.classList.add("cacto-animation");

  cloud.classList.add("cloud-animation");

  function floorAnimation1(){
    floor1.classList.add('floor-animation-1');
        }setInterval(floorAnimation1, 0);

function floorAnimation2(){
    floor2.classList.add('floor-animation-2');
        }setInterval(floorAnimation2, 0);
function floorAnimation3(){
    floor3.classList.add('floor-animation-3');
        }setInterval(floorAnimation3, 3100);

  audioStart.play();

}

document.addEventListener("keydown", start);
document.addEventListener("click", start);

// Função para Pulo
const jump = () => {
  hero.classList.add("hero-jump");
  setTimeout(() => {
    hero.classList.remove("hero-jump");
  }, 500);
}

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

// Função pra Atualizar o Score
const updateScore = () => {
  contador++;
  points.innerText = contador;
}

// Função para Colisão e Game Over
const checkGameOver = setInterval(() => {
  const cactoPosition = cacto.offsetLeft;
  const heroPosition = +window.getComputedStyle(hero).bottom.replace("px", "");
  const floorPosition1 = floor1.offsetLeft;
  const floorPosition2 = floor2.offsetLeft;
  const floorPosition3 = floor3.offsetLeft;

  if (cactoPosition <= 120 && cactoPosition > 0 && heroPosition < 100) {

    cacto.style.animation =  "none";
    cacto.style.left = `${cactoPosition}px`;

    cloud.style.animationPlayState = 'paused';

    hero.style.display = "none";

    floor1.style.animation = "none";
    floor1.style.left = `${floorPosition1}px`;

    floor2.style.animation = "none";
    floor2.style.left = `${floorPosition2}px`;

    floor3.style.animation = "none";
    floor3.style.left = `${floorPosition3}px`;

    gameOverText.style.display = "flex"

    function stopAudioStart() {
      audioStart.pause();
    }stopAudioStart();

    audioGameOver.play();

    function stopAduioGameOver() {
      audioGameOver.pause();
    }setTimeout(stopAduioGameOver, 3000);

    clearInterval(checkGameOver);

  }

  if (cactoPosition <= 60 && cactoPosition > 0 && heroPosition >= 100) {
    updateScore();
  }

}, 10);