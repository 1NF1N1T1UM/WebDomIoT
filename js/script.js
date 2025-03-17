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
    
    // Observer les sections pour les faire apparaître et disparaître en scrollant
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Si la section est visible
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                entry.target.classList.remove("inactive");
                
                // Activer les icônes de cette section
                const sectionIcons = entry.target.querySelectorAll(".icon");
                sectionIcons.forEach(icon => {
                    icon.classList.add("show");
                    icon.classList.remove("hide");
                });
            } else {
                // Si la section n'est plus visible
                entry.target.classList.remove("active");
                entry.target.classList.add("inactive");
                
                // Désactiver les icônes de cette section
                const sectionIcons = entry.target.querySelectorAll(".icon");
                sectionIcons.forEach(icon => {
                    icon.classList.remove("show");
                    icon.classList.add("hide");
                });
            }
        });
    }, { 
        threshold: 0.2,    // Déclenche quand 20% de la section est visible
        rootMargin: "-10% 0px" // Ajuste légèrement le seuil de déclenchement
    });
    
    // Observer toutes les sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Activer automatiquement la première section au chargement
    setTimeout(() => {
        if (sections[0]) {
            sections[0].classList.add("active");
            
            // Activer les icônes de la première section
            const firstSectionIcons = sections[0].querySelectorAll(".icon");
            firstSectionIcons.forEach(icon => {
                icon.classList.add("show");
            });
        }
    }, 100);
})