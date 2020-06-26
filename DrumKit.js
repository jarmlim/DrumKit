//this code is for Drum kit app to play sound using keyboard storke and mouse click

//this will get the length of the array class"drum"
var drumButtonLeng = document.querySelectorAll(".drum").length

//this will add event listener to all class "drum" with funtion click and execute "drumButtonClickedPress"
for (var i = 0; i < drumButtonLeng; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    //this function will put detect the clicked inner HTML and make a sound accroding to what html is clikced
    //the innerHTML or the html text that is use in this button is the same at the key in the makesound key
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
     ButtonAnimation(buttonInnerHTML);
  });
}



//this will detect the key pressed then pass it on the makesound funtion
document.addEventListener('keydown', function(event){
  //this will select the key// dont forget the .keydown
  //you can also select the code. using .code
  //if you just typed event, it will show you all of the event value like duration, code, key, ect.
  makeSound(event.key);
  //ButtonAnimation(event);
});


//this function is to make sound according to what key is press or clicked
function makeSound(key){
  switch (key) {
    case "w":
      var audioW = new Audio("sounds/tom-1.mp3");
      audioW.play();
      break;

    case "a":
      var audioA = new Audio("sounds/tom-2.mp3");
      audioA.play();
      break;

    case "s":
      var audioS = new Audio("sounds/tom-3.mp3");
      audioS.play();
      break;

    case "d":
      var audioD = new Audio("sounds/tom-4.mp3");
      audioD.play();
      break;

    case "j":
      var audioJ = new Audio("sounds/snare.mp3");
      audioJ.play();
      break;

    case "k":
      var audioK = new Audio("sounds/crash.mp3");
      audioK.play();
      break;
    case "l":
      var audioL = new Audio("sounds/kick-bass.mp3");
      audioL.play();
      break;

    default:
      console.log(key);

    }
}





function ButtonAnimation(key) {
  //selecting the key that have been pressed or clicked
  var keyPressed = document.querySelector("."+key);

  //this will add the pressed class to button selected
   keyPressed.classList.add("pressed");

//time delay for the class press will be romved to the selected key
//the stracture of timedelay is setTimerout(myFunction,millisecond);
 this.setTimeout(function(){
   //this will remove the pressed class to the button that is being selected
      keyPressed.classList.remove('pressed');
 },
//this number is the millisecond time delay befor this function will be execute.
 200);

}//ButtonAnimation
