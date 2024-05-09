var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImages = "images/dice"+randomNumber1+".png";

var selectImage1= document.querySelectorAll("img")[0];
selectImage1.setAttribute("src",randomImages);
var selectImage2 = document.querySelectorAll("img")[1];

//Switch case used for understanding and alternative 

switch(randomNumber2){
    case 1: selectImage2.setAttribute("src","images/dice1.png");
    break;

    case 2: document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
    break;

    case 3: document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
    break;

    case 4: document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
    break;

    case 5: document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
    break;

    case 6: document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
    break;
}

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 WINS";
}
else if(randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="DRAW"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 WINS"
}