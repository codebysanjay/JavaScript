var random1=Math.floor(Math.random()*6+1);
var diceNum="dice"+random1+".png";
var diceName="images/"+diceNum;
document.querySelectorAll("img")[0].setAttribute("src",diceName);
var random2=Math.floor(Math.random()*6+1);
var diceNum="dice"+random2+".png";
var diceName="images/"+diceNum;
document.querySelectorAll("img")[1].setAttribute("src",diceName);

if (random1>random2) {
    document.querySelector("h1").innerHTML="Player 1 wins!"
}else if (random1<random2) {
    document.querySelector("h1").innerHTML="Player 2 wins!"
}else{document.querySelector("h1").innerHTML="Draw"}