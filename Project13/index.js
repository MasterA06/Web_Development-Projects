var a=document.querySelectorAll(".drum").length;
for (var i=0;i<a;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHTML=this.innerHTML;
        characters(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
});
}
document.addEventListener("keypress",function(event) {
    characters(event.key);
    buttonAnimation(event.key)
});
function characters(key) {
    switch (key) {
    case "w":
        var tom1=new Audio("file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project13/Drum%20Kit%20Starting%20Files/sounds/crash.mp3");
        tom1.play()
        break;
    case "a":
        var tom2=new Audio("file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project13/Drum%20Kit%20Starting%20Files/sounds/kick-bass.mp3");
        tom2.play()
        break;
    case "s":
        var tom3=new Audio("file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project13/Drum%20Kit%20Starting%20Files/sounds/snare.mp3");
        tom3.play()
        break;
    case "d":
        var tom4=new Audio("file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project13/Drum%20Kit%20Starting%20Files/sounds/tom-1.mp3");
        tom4.play()
        break;
    case "j":
        var tom5=new Audio("file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project13/Drum%20Kit%20Starting%20Files/sounds/tom-2.mp3");
        tom5.play()
        break;
    case "k":
        var tom6=new Audio("file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project13/Drum%20Kit%20Starting%20Files/sounds/tom-3.mp3");
        tom6.play()
        break;
    case "l":
        var tom7=new Audio("file:///C:/Users/anike/OneDrive/Documents/Projects-Resume%20content/Project13/Drum%20Kit%20Starting%20Files/sounds/tom-4.mp3");
        tom7.play()
        break;

    default:console.log(buttonInnerHTML);
}}
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }