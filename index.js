var a = Math.random();
var b = Math.random();
a = a * 6;
b = b * 6;
var randomNumber1=Math.floor(a);
var randomNumber2=Math.floor(b);
switch(randomNumber1){
    case 0:
        document.querySelector(".img1").setAttribute("src","dice1.png");
        break;

    case 1:
        document.querySelector(".img1").setAttribute("src","dice2.png");
        break;

    case 2:
        document.querySelector(".img1").setAttribute("src","dice3.png");
        break;
    
    case 3:
        document.querySelector(".img1").setAttribute("src","dice4.png");
        break;
        
    case 4:
        document.querySelector(".img1").setAttribute("src","dice5.png");
        break;
    
    case 5:
        document.querySelector(".img1").setAttribute("src","dice6.png");
        break;
}
switch(randomNumber2){
    case 0:
        document.querySelector(".img2").setAttribute("src","dice1.png");
        break;

    case 1:
        document.querySelector(".img2").setAttribute("src","dice2.png");
        break;

    case 2:
        document.querySelector(".img2").setAttribute("src","dice3.png");
        break;
    
    case 3:
        document.querySelector(".img2").setAttribute("src","dice4.png");
        break;
        
    case 4:
        document.querySelector(".img2").setAttribute("src","dice5.png");
        break;
    
    case 5:
        document.querySelector(".img2").setAttribute("src","dice6.png");
        break;
}
if(randomNumber1 > randomNumber2){
    document.querySelector(".text").textContent="Player 1 Win🔥";
}
else if(randomNumber1<randomNumber2){
    document.querySelector(".text").textContent="Player 2 Win🔥";
}
else if(randomNumber1==randomNumber2){
    document.querySelector(".text").textContent="Match Draw.. Try Again..";
}
