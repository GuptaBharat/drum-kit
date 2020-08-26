
var buttons = document.querySelectorAll(".drum");

for(i=0; i<buttons.length;i++){

  buttons[i].addEventListener("click", function(){
      playSound(this.innerHTML);

      btnAnimation(this.innerHTML);
  });

}

document.addEventListener("keydown", function(event){
  playSound(event.key);

  btnAnimation(event.key);
});


function btnAnimation(key){

  var tag = document.querySelector("."+key);
  tag.classList.add("pressed");

  setTimeout(function(key){
    tag.classList.remove("pressed");
  },200);

}

function playSound(key){

  switch (key){
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.currentTime = 0;
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.currentTime = 0;
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.currentTime = 0;
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.currentTime = 0;
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.currentTime = 0;
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/crash.mp3");
      sound.currentTime = 0;
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/snare.mp3");
      sound.currentTime = 0;
      sound.play();
      break;
    default:

  }

}
