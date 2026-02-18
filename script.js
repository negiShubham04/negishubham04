/* Typing Effect */

const text = "Hi, I'm Shubham";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}

typing();


/* Scroll Reveal Animation */

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
