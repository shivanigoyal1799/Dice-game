var randomNumber1=Math.floor(Math.random() *6)+1;
console.log(randomNumber1);
var player1Image="images/dice"+randomNumber1+".png";
var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
var player2Image="images/dice"+randomNumber2+".png";
document.querySelector(".dice .img1").setAttribute("src",player1Image);
document.querySelector(".dice .img2").setAttribute("src",player2Image);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins🚩";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins🚩";
}else{
    document.querySelector("h1").textContent="Draw";
}