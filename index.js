var buttons = document.querySelectorAll(".drum");
var btnCount = buttons.length;

for(var i = 0; i < btnCount; i++)
{
    buttons[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
})

function makeSound(key)
{
    var audioUrl;
   
    switch (key) {
        case 'w':
            audioUrl = "sounds/crash.mp3";
            break;
        case 'a':
            audioUrl = "sounds/kick-bass.mp3";
            break;
        case 's':
            audioUrl = "sounds/snare.mp3";
            break;
        case 'd':
            audioUrl = "sounds/tom-1.mp3";
            break;
        case 'j':
            audioUrl = "sounds/tom-2.mp3";
            break;
        case 'k':
            audioUrl = "sounds/tom-3.mp3";
            break;
        case 'l':
            audioUrl = "sounds/tom-4.mp3";
            break;                    
        default: console.log(key);
            break;
    }
    var audio = new Audio(audioUrl);
    audio.play();
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");    

    setTimeout(function(){
     activeButton.classList.remove("pressed");   
    }, 100);
}