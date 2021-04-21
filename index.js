  /// event listener added to all the button click 


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    console.log(i);
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        //  this.style.color = "red";
         soundfun(this.innerHTML);
         btnanimation(this.innerHTML);
        // alert("this is " +this.innerHTML );

      });
      
}

document.addEventListener('keydown', logKey);

function logKey(event)
{
  soundfun(event.key);
  btnanimation(event.key);
}


// function for the sound 
function soundfun(key)
{
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      
      break;

      case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
    
          case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
    
          case "k":
            var snare = new Audio("sounds/kick-bass.mp3");
            snare.play();
            break;

            case "l":
            var kickbass = new Audio("sounds/snare.mp3");
            kickbass.play();
            break;
  
    default:
      console.log("nothing");
      break;
  }
}

// function for the animation 

function btnanimation(key)
{
  var btnani = document.querySelector("."+key);
  btnani.classList.add("pressed");

  setTimeout(function(){ btnani.classList.remove("pressed") }, 100);


}


