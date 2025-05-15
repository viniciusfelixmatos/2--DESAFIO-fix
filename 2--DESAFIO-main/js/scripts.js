document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-links");

    const arrow = document.querySelector(".arrow-box");
    const about = document.querySelector(".about-area");

    /*Função para botão de menu*/
    arrow.addEventListener("click", function() {
        about.scrollIntoView({behavior: "smooth"});
    });

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        toggle.classList.toggle("active");
    });


    /*Código do Owl Carrousel*/
    $('.owl-carousel').owlCarousel({
        center: true,
        items: 1,                   
        margin: 20,
        stagePadding: 250,
        navText: ["<img src='./img/seta-esquerda.png'>","<img src='./img/seta-direita.png'>"],
        nav: true,
        dots: true,
        responsive: {
            1200: {
                stagePadding: 300  
            },
            768: {
                stagePadding: 200
            },
            480: {
                stagePadding: 100
            },
            375: {
                stagePadding: 50
            },
            320: {
                stagePadding: 50
            }
        }
    });
});