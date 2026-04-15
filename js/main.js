let toggle = document.getElementById("menu-toggle");
let nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
const elements = document.querySelectorAll(
    '.hidden, .fade-left, .fade-right, .zoom-in, .solution-card, .price-card, .learn-card'
);

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (
                entry.target.classList.contains('solution-card') ||
                entry.target.classList.contains('price-card') ||
                entry.target.classList.contains('learn-card')
            ) {
                obs.unobserve(entry.target);
            }
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));
