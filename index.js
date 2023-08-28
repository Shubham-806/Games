var randomNumber1=Math.floor((Math.random()*6)+1);
var imagesource="dice"+randomNumber1+".png";
var randimage="images/"+imagesource;
var imag =document.querySelectorAll("img")[0];
imag.setAttribute("src",randimage);


var randomNumber2=Math.floor((Math.random()*6)+1);
var imagesource2="dice"+randomNumber2+".png";
var randimage2="images/"+imagesource2;
var imag2 =document.querySelectorAll("img")[1];
imag2.setAttribute("src",randimage2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="⭐Draw!";
}
