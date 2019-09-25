var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var resetButton = document.querySelector("#reset");
var gameCounter = document.querySelector("input");
var gameCount = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

gameCounter.addEventListener('change', function () {
  gameCount.textContext = this.value;
  maxScore = Number(this.value);
  reset();
});

p1Button.onclick = function () {
  if(!gameOver) {
    p1Score++;
    if (maxScore === p1Score) {
     p1Display.classList.add("winner");
     gameOver = !gameOver; 
    }
    p1Display.textContent = p1Score;
  }
}

p2Button.onclick = function () {
  if(!gameOver) {
    p2Score++;
    if (maxScore === p2Score) {
     p2Display.classList.add("winner");
     gameOver = !gameOver; 
    }
    p2Display.textContent = p2Score;
  }
}

resetButton.onclick = function () {
  reset();
}

function reset () {
  p1Score = 0;
  p2Score = 0; 
  p2Display.classList.remove("winner");
  p1Display.classList.remove("winner");
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  gameOver = !gameOver;
}
