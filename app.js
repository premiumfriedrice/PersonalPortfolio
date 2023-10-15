var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide")

let transAmount = "translateX(-56.75rem)"

var vpsize = window.matchMedia("(max-width: 400px)")

function changeTranslate(x) {
    if (x.matches) { // If media query matches translate amount is change, this needed because if the translateamount is set to normal in a smaller viewport, overscroll will happen
        transAmount = "translateX(-19.95rem)"; 
        }
}

changeTranslate(vpsize) //

btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    for(i=0;i<2;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

btn[1].onclick = function() {
    slide.style.transform = transAmount;
    for(i=0;i<2;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}  