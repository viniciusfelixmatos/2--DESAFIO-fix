document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-links");

    const arrow = document.querySelector(".arrow-box");

    /*Função para botão de menu*/
    arrow.addEventListener("click", function() {
        console.log("clicado");
        window.scrollBy({
            bottom: 100,
            behavior: 'smooth'
        });
        console.log("movido");
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
        navText:[$('.am-next'),$('.am-prev')], 
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