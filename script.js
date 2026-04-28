// ================= TYPING =================
// Lista de textos que se van a escribir animados
const texts = ["Full Stack Developer 💻", "UI Lover ✨", "Frontend Dev 🚀"];

let count = 0; // Índice del texto actual
let index = 0; // Índice de letras

// Función que escribe letra por letra
function type(){
  let current = texts[count]; // Texto actual
  let letter = current.slice(0, ++index); // Corta letras progresivamente

  document.querySelector(".typing").textContent = letter;

  // Cuando termina una palabra
  if(letter.length === current.length){
    count++; // Pasa al siguiente texto
    index = 0;

    // Reinicia cuando termina todos
    if(count === texts.length) count = 0;

    setTimeout(type,2000); // Pausa antes de siguiente palabra
  }else{
    setTimeout(type,50); // Velocidad de escritura
  }
}

type(); // Inicia animación


// ================= SCROLL ANIMATION =================
// Selecciona elementos con animación
const elements = document.querySelectorAll(".fade");

// Detecta scroll
window.addEventListener("scroll", ()=>{
  elements.forEach(el=>{
    // Si el elemento entra en pantalla
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("visible"); // Activa animación
    }
  });
});


// ================= COPIAR EMAIL =================
function copyEmail(){

  // Obtiene el texto del correo
  const email = document.getElementById("email").textContent;

  // Copia al portapapeles
  navigator.clipboard.writeText(email)
    .then(() => {
      alert("Correo copiado 📋"); // éxito
    })
    .catch(() => {
      alert("No se pudo copiar"); // error
    });
}


// ================= PARTICLES =================
// Configuración del fondo animado
tsParticles.load("particles-js", {
  particles:{
    number:{ value:100 }, // Cantidad de partículas
    color:{ value:"#38bdf8" }, // Color
    move:{ enable:true, speed:1 }, // Movimiento
    size:{ value:2 } // Tamaño
  }
});


// ================= NAV ACTIVO =================
// Detecta secciones y links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id"); // Sección actual
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    // Marca link activo
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});

// ================= FORMULARIO FORMSPREE PRO =================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", async function(e){

  e.preventDefault(); // evita redirección

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if(response.ok){
    alert("Mensaje enviado correctamente ✅");
    form.reset();
  }else{
    alert("Error al enviar 😢");
  }

});
