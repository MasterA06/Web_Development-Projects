var randomNumber1=(Math.random()*6)+1;
var randomNumber2=(Math.random()*6)+1;
var round1=Math.floor(randomNumber1);
var round2=Math.floor(randomNumber2);
if (round1===1) {
    document.querySelector("img.img1").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice1.png");
}
else if (round1===2) {
    document.querySelector("img.img1").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice2.png");
}
else if (round1===3) {
    document.querySelector("img.img1").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice3.png");
}
else if (round1===4) {
    document.querySelector("img.img1").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice4.png");
}
else if (round1===5) {
    document.querySelector("img.img1").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice5.png");
}
else{
    document.querySelector("img.img1").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice6.png");
}
if (round2===1) {
    document.querySelector("img.img2").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice1.png");
}
else if (round2===2) {
    document.querySelector("img.img2").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice2.png");
}
else if (round2===3) {
    document.querySelector("img.img2").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice3.png");
}
else if (round2===4) {
    document.querySelector("img.img2").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice4.png");
}
else if (round2===5) {
    document.querySelector("img.img2").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice5.png");
}
else{
    document.querySelector("img.img2").setAttribute("src","file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project12/dice6.png");
}
if (round1>round2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";}
else if (round1<round2) { 
    document.querySelector("h1").innerHTML="Player 2 Wins!";}
else {
    document.querySelector("h1").innerHTML="Draw!";}