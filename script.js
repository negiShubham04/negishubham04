/* Typing Effect */

const text = "Hi, I'm Shubham Negi - Backend Engineer";
let index = 0;
let speed = 60;

function typeWriter() {
    if (index < text.length) {
        document.querySelector(".typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

/* Scroll Reveal */

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(r => {
        const windowHeight = window.innerHeight;
        const elementTop = r.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            r.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);


/* Smooth Scroll Navigation */

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
