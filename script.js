document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Efeito de Navbar mudando de cor ao rolar a página
    const header = document.getElementById("header");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("rolagem");
        } else {
            header.classList.remove("rolagem");
        }
    });

    // 2. Menu Mobile (Hambúrguer)
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li a");

    menuToggle.addEventListener("click", function() {
        navList.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link (mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if(navList.classList.contains("active")) {
                navList.classList.remove("active");
            }
        });
    });

    // 3. Efeito de Rolagem Suave (Smooth Scroll)
    for (const link of navLinks) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            const target = document.querySelector(href);
            
            if(target) {
                const offsetTop = target.offsetTop;
                scroll({
                    top: offsetTop - 70, 
                    behavior: "smooth"
                });
            }
        });
    }

    // 4. Interatividade do FAQ (Perguntas Frequentes)
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        
        questionBtn.addEventListener("click", () => {
            // Fecha os outros itens abertos (opcional, deixa mais limpo)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            
            // Alterna o item atual
            item.classList.toggle("active");
        });
    });

    // 5. Animação de Revelação ao rolar a página (Scroll Reveal)
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});