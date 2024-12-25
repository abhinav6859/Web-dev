
   
 let drumButtons = document.querySelectorAll(".drum");

 document.addEventListener("keydown", function(event) {
     // Loop through all drum buttons
     drumButtons.forEach(button => {
         // Reset color for all buttons
         button.style.color = "";
 
         // Check if the button's text matches the pressed key
         if (button.innerText.toLowerCase() === event.key.toLowerCase()) {
             // Change the color of the matched button
             button.style.color = "red";
         }
     });
 });
 

  
     document.addEventListener("keydown",function(event){
 
switch (event.key){
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


  default: console.log(event.key);

}
});



  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();