// ====================
// Hamburger Menu Toggle
// ====================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

// Hamburger animation
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
});

// ====================
// Smooth Scroll
// ====================
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove("active"); // close menu on mobile
    });
});

// ====================
// Typing Animation
// ====================
const text = "Hi, I'm Swastik Sharma!";
const typingTarget = document.querySelector(".main h3");
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingTarget.innerHTML = text.substring(0, i + 1) + '<span style="color:#02ffaf">|</span>';
        i++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            typingTarget.innerHTML = text; // remove cursor after finish
        }, 500);
    }
}
typeWriter();

// ====================
// Scroll Animation
// ====================
const revealElements = document.querySelectorAll(".about, .githubdisplay, .gitprofile, .githubfollow");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ====================
// Hire Me Button Effect
// ====================
const hireBtn = document.querySelector(".Hire-btn");
if (hireBtn) {
    hireBtn.addEventListener("click", () => {
        hireBtn.innerText = "Thanks!";
        hireBtn.style.background = "#00cc88";
        setTimeout(() => {
            hireBtn.innerText = "Hire me";
            hireBtn.style.background = "#02ffaf";
        }, 2000);
    });
}
