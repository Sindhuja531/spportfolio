// Typing Animation
const roles = [
  "Frontend Developer",
  "Software Engineer",
  "UI/UX Focused Developer",
  "Problem Solver"
];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = roles[i];
  
  if (!isDeleting) {
    document.getElementById("typing").textContent = current.slice(0, j++);
    if (j === current.length + 1) {
      isDeleting = true;
      setTimeout(type, 800);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.slice(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(type, isDeleting ? 80 : 120);
}
type();

// Reveal on scroll
const revealItems = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  revealItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("active");
    }
  });
});

// Mobile menu
document.getElementById("menuBtn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("nav-open");
});

// Footer year auto-update
document.getElementById("year").textContent = new Date().getFullYear();
