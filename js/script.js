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
            // Si la section est visible
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                entry.target.classList.remove("inactive");
            } else {
                // Si la section n'est plus visible
                if (entry.target.classList.contains("active")) {
                    entry.target.classList.remove("active");
                    entry.target.classList.add("inactive");
                }
            }
        });
    }, { threshold: 0.1, rootMargin: "-10% 0px" });
    
    sections.forEach(section => observer.observe(section));
    
    // Observer les icônes pour les faire apparaître progressivement
    const iconObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.remove("hide");
            } else {
                // Si l'icône n'est plus visible
                if (entry.target.classList.contains("show")) {
                    entry.target.classList.remove("show");
                    entry.target.classList.add("hide");
                }
            }
        });
    }, { threshold: 0.5 });
    
    icons.forEach(icon => iconObserver.observe(icon));
    
    // Ajouter la classe active à la première section au chargement
    setTimeout(() => {
        if (sections[0]) {
            sections[0].classList.add("active");
        }
        
        // Activer les icônes de la première section
        const firstSectionIcons = sections[0].querySelectorAll(".icon");
        firstSectionIcons.forEach(icon => {
            icon.classList.add("show");
        });
    }, 100);
});