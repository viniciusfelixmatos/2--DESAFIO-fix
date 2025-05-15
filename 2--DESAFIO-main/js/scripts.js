document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-links");

    /* Selector de elementos */
    const sobre = document.getElementById('sobre')
    const pontos = document.getElementById('pontos-jogo')
    const baixe = document.getElementById('baixe-jogo')
    const arrow = document.querySelector(".arrow-box");

    /* Selector Sections */
    const about = document.querySelector(".about-area");
    const info = document.querySelector(".info-game");
    const download = document.querySelector(".download-area")

    /* Click scroll */
    sobre.addEventListener("click", function() {
        about.scrollIntoView({behavior: "smooth"}); 
    });

    pontos.addEventListener("click", function() {
        info.scrollIntoView({behavior: "smooth"});
    });

    baixe.addEventListener("click", function(){
        download.scrollIntoView({behavior: "smooth"});
    });

    arrow.addEventListener("click", function() {
        about.scrollIntoView({behavior: "smooth"});
    });
    
    /*Função para botão de menu*/
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