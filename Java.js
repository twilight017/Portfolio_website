    
function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");

        if (menuBth.className === "nav-menu") {
            menuBth.className += "responsive";
        } else{
            menuBth.className= "nav-menu"
        }
} 

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle_switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

var typingEffect = new Typed(".typedText",{
    strings: ["Suraj Roka ","A Developer ","A Coder ..", "A Learner .."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})