
   
    // change color of last clicked button 
let drumButtons = document.querySelectorAll(".drum");

    for( let i=0; i < drumButtons.length ; i++){
      drumButtons[i].addEventListener("click",function(){
   
      drumButtons.forEach(button => button.style.color = "");
    this.style.color ="red"; // it will change color of clicked button
    console.log(this.innerHTML);
  });
}



    for( let i=0; i < drumButtons.length ; i++){
      drumButtons[i].addEventListener("click",function(){
var buttonInnerHTML =this.innerHTML;
switch (buttonInnerHTML){
  case "w":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

  case "a":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

  case "s":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

  case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

  case "j":
   
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

  case "k":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

  case "l":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;


  default: console.log(this.innerHTML);

}
});
}


  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();