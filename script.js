// TYPING
const text="Full Stack Developer 💻 | UI Lover ✨";
let i=0;

function typing(){
  if(i<text.length){
    document.querySelector(".typing").innerHTML+=text[i];
    i++;
    setTimeout(typing,50);
  }
}
typing();

// SCROLL ANIMATION
const elements=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
  elements.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("visible");
    }
  });
});

// PARTICLES (corregido)
tsParticles.load("particles-js", {
  particles: {
    number: { value: 40 },
    color: { value: "#38bdf8" },
    move: { enable: true, speed: 1 },
    size: { value: 2 }
  }
});