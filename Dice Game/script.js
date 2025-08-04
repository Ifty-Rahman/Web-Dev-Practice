// generate a random number
let firstRandomNumber = Math.floor(Math.random() * 6) + 1;
let secondRandomNumber = Math.floor(Math.random() * 6) + 1;

// function for players
function playerOne() {
  document.querySelector(".container h1").textContent = "🏆 Player 1 Wins!";
  document.querySelector("img.img1").setAttribute("src", "images/dice" + firstRandomNumber + ".png");
  document.querySelector("img.img2").setAttribute("src", "images/dice" + secondRandomNumber + ".png");
}

// condition
if (firstRandomNumber > secondRandomNumber && firstRandomNumber === 2) {
  playerOne();
} else if (firstRandomNumber > secondRandomNumber && firstRandomNumber === 3) {
  playerOne();
} else if (firstRandomNumber > secondRandomNumber && firstRandomNumber === 4) {
  playerOne();
} else if (firstRandomNumber > secondRandomNumber && firstRandomNumber === 5) {
  playerOne();
} else if (firstRandomNumber > secondRandomNumber && firstRandomNumber === 6) {
  playerOne();
} else if (firstRandomNumber === secondRandomNumber) {
  document.querySelector(".container h1").textContent = "🤪 Tie!";
  document.querySelector("img.img1").setAttribute("src", "images/dice" + firstRandomNumber + ".png");
  document.querySelector("img.img2").setAttribute("src", "images/dice" + secondRandomNumber + ".png");
} else {
  document.querySelector(".container h1").textContent = "Player 2 Wins! 🏆";
  document.querySelector("img.img1").setAttribute("src", "images/dice" + firstRandomNumber + ".png");
  document.querySelector("img.img2").setAttribute("src", "images/dice" + secondRandomNumber + ".png");
}
