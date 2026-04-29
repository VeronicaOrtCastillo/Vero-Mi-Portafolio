// ================= TYPING =================
const texts = ["Full Stack Developer 💻", "UI Lover ✨", "Frontend Dev 🚀"];

let count = 0;
let index = 0;

function type(){
  let current = texts[count];
  let letter = current.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === current.length){
    count++;
    index = 0;

    if(count === texts.length) count = 0;

    setTimeout(type,2000);
  }else{
    setTimeout(type,50);
  }
}
type();

// ================= MENÚ HAMBURGUESA =================
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById(".nav ul");

if(menuToggle && navMenu){
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}


// ================= SCROLL =================
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", ()=>{
  elements.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("visible");
    }
  });
});


// ================= COPIAR EMAIL =================
function copyEmail(){
  const email = document.getElementById("email").textContent;

  navigator.clipboard.writeText(email)
    .then(() => alert("Correo copiado 📋"))
    .catch(() => alert("No se pudo copiar"));
}


// ================= PARTICLES =================
tsParticles.load("particles-js", {
  particles:{
    number:{ value:100 },
    color:{ value:"#38bdf8" },
    move:{ enable:true, speed:1 },
    size:{ value:2 }
  }
});


// ================= NAV ACTIVO =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});


// ================= FORMULARIO =================
const form = document.querySelector(".contact-form");

form.addEventListener("submit", async function(e){
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if(response.ok){
    alert("Mensaje enviado correctamente ✅");
    form.reset();
  }else{
    alert("Error al enviar 😢");
  }
});


// ================= CHAT =================
document.addEventListener("DOMContentLoaded", () => {

  const chatButton = document.getElementById("chatButton");
  const chatBox = document.getElementById("chatBox");
  const closeBtn = document.getElementById("closeChat");
  const sendBtn = document.getElementById("sendBtn");
  const input = document.getElementById("userInput");
  const messages = document.getElementById("chatMessages");

  let initialized = false;

  // ABRIR CHAT
  function openChat(){
    chatBox.style.display = "flex";

    if(!initialized){
      messages.innerHTML = `
        <div class="msg bot">
          Hola 👋 Soy el asistente de Vero.<br><br>
          Puedes preguntarme:<br>
          • ¿Quién es Vero?<br>
          • Proyectos<br>
          • Habilidades<br>
          • ¿Cómo contactarla?
        </div>
      `;
      initialized = true;
    }
  }

  // CERRAR CHAT
  function closeChat(){
    chatBox.style.display = "none";
  }

  chatButton.addEventListener("click", openChat);
  closeBtn.addEventListener("click", closeChat);

  // ESTADO INICIAL
  chatBox.style.display = "none";

  // ENVIAR MENSAJE
  function sendMessage(){
    const text = input.value.toLowerCase().trim();
    if(!text) return;

    // mensaje usuario
    messages.innerHTML += `<div class="msg user">${text}</div>`;

    let response = "";

    if (text.includes("hola")) {
      response = "¡Hola! 😊 Qué gusto verte por aquí.";
    } 
    else if (text.includes("quien") || text.includes("vero")) {
      response = "Vero es una desarrolladora Full Stack Jr. enfocada en frontend ✨";
    }
    else if (text.includes("habilidad") || text.includes("tecnolog")) {
      response = "Trabaja con HTML, CSS, JavaScript, Java y MySQL 💻";
    }
    else if (text.includes("proyecto")) {
      response = "Ha trabajado en:\n• 5ta Esencia\n• Agenda Telefónica\n• High Sierra";
    }
    else if (text.includes("contact") || text.includes("correo")) {
      response = "Puedes escribirle a: veronicaortcaz@gmail.com 📩";
    }
    else if (text.includes("experienc")) {
      response = "Tiene experiencia en desarrollo full stack y trabajo con Scrum 🚀";
    }
    else {
      response = "Puedes preguntarme sobre proyectos, habilidades o contacto 😉";
    }

    // efecto escribiendo
    messages.innerHTML += `<div class="msg bot" id="typing">Escribiendo...</div>`;
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
      document.getElementById("typing").remove();

      messages.innerHTML += `<div class="msg bot">${response}</div>`;
      messages.scrollTop = messages.scrollHeight;
    }, 800);

    input.value = "";
  }

  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keypress", (e)=>{
    if(e.key === "Enter") sendMessage();
  });

});
