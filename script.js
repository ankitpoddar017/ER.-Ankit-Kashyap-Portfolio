const roles = [
  "Mathematics Teacher",
  "Computer Science",
  "Python Developer",
  "Accountant",
  "Computer Applications"
];

const typing = document.getElementById("typing");
let roleIndex = 0, charIndex = 0, deleting = false;

function typeRole() {
  const word = roles[roleIndex];
  typing.textContent = word.slice(0, charIndex);

  if (!deleting && charIndex < word.length) {
    charIndex++;
    setTimeout(typeRole, 85);
  } else if (!deleting && charIndex === word.length) {
    deleting = true;
    setTimeout(typeRole, 1500);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeRole, 45);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 300);
  }
}
typeRole();

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#navMenu");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
