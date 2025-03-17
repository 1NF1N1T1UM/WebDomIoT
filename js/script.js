document.addEventListener("DOMContentLoaded", () => {
    // Sélection des sections et icônes
    const sections = document.querySelectorAll("section");
    const icons = document.querySelectorAll(".icon");

    // Défilement fluide lors du clic sur un lien du menu
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Observer les sections pour les faire apparaître en scrollant
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Observer les icônes pour les faire apparaître progressivement
    const iconObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    icons.forEach(icon => iconObserver.observe(icon));
});
