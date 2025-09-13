// Carrusel
const cards = document.querySelector(".cards");
let offset = 0;
document.querySelector(".next").addEventListener("click", () => {
    if (offset > -(cards.scrollWidth - cards.parentElement.offsetWidth)) {
        offset -= 300;
        cards.style.transform = `translateX(${offset}px)`;
    }
});
document.querySelector(".prev").addEventListener("click", () => {
    if (offset < 0) {
        offset += 300;
        cards.style.transform = `translateX(${offset}px)`;
    }
});

// Modo oscuro
const toggleBtn = document.getElementById("modo-oscuro");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("d"); // activa modo oscuro del formulario también
        toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}


document.getElementById("togglePassword").addEventListener("click", function() {
    const password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});
