
let randomNumber = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
]
document.querySelector(".img1").setAttribute("src",diceImages[randomNumber - 1])
document.querySelector(".img2").setAttribute("src",diceImages[randomNumber2 - 1])

if(randomNumber>randomNumber2){
    document.querySelector(".heading").innerHTML = "Player 1 Wins"
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}