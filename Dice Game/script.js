// generate a random number
let firstRandomNumber = Math.floor(Math.random() * 6) + 1;
let secondRandomNumber = Math.floor(Math.random() * 6) + 1;

// Change the image source based on the random number
document.querySelector("img.img1").setAttribute("src", "images/dice" + firstRandomNumber + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + secondRandomNumber + ".png");

//If player 1 wins
if (firstRandomNumber > secondRandomNumber) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
//If player 2 wins
else if (firstRandomNumber < secondRandomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
//If it's a draw
else {
    document.querySelector("h1").innerHTML = "Draw!";
}