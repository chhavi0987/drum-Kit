function gotClicked0(){
    var audio=new Audio("sounds/crash.mp3")
        audio.play()  
}
function gotClicked1(){
    var audio=new Audio("sounds/kick-bass.mp3")
        audio.play()  
}
function gotClicked2(){
    var audio=new Audio("sounds/snare.mp3")
        audio.play()  
}
function gotClicked3(){
    var audio=new Audio("sounds/tom-1.mp3")
        audio.play()  
}
function gotClicked4(){
    var audio=new Audio("sounds/tom-2.mp3")
        audio.play()  
}
function gotClicked5(){
    var audio=new Audio("sounds/tom-3.mp3")
        audio.play()  
}
function gotClicked6(){
    var audio=new Audio("sounds/tom-4.mp3")
        audio.play()  
}
document.querySelectorAll("button")[0].addEventListener("click",gotClicked0)
document.querySelectorAll("button")[1].addEventListener("click",gotClicked1)
document.querySelectorAll("button")[2].addEventListener("click",gotClicked2)
document.querySelectorAll("button")[3].addEventListener("click",gotClicked3)
document.querySelectorAll("button")[4].addEventListener("click",gotClicked4)
document.querySelectorAll("button")[5].addEventListener("click",gotClicked5)
document.querySelectorAll("button")[6].addEventListener("click",gotClicked6)


// document.querySelectorAll("button")[0].addEventListener("keypress",gotClicked0)
document.addEventListener("keydown",function(event){
    makeSound(event.key)
    animation(event.key)
})

function makeSound(key){
    switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "a":
            var kick=new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
        case "s":
            var snare= new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "d":
            var tom1= new Audio("sounds/tom-1.mp3")
            tom1.play()
            break; 
        case "j":
            var tom2= new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "k":
            var tom3= new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "l":
            var tom4= new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        default:
            break;
    }
}

function animation(currentKey){
    var activeButton= document.querySelector("."+ currentKey)
    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)

}



// document.querySelectorAll("button")[1].addEventListener("mouseover",gotClicked)
// document.querySelectorAll("button")[2].addEventListener("",gotClicked)
// document.querySelectorAll("button")[3].addEventListener("click",gotClicked)