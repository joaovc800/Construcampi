// Helpers para as animações de slide in
$(document).ready(function() {
    const row1 = document.getElementById("row_animate_1"); // privadas
    const row2 = document.getElementById("row_animate_2"); // privadas

    // Opções para o observer que checa se a pessoa esta perto da div
    let options = {
        rootMargin: '0px',
        threshold: [0.25] // 25% da div tem que ser vista
    }

    let observer_row1 = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting === true) {
            row1.classList.add('push_right_row');
            row1.classList.remove('right_row_hidden');
        }
    }, options);

    // Inicia o observer
    observer_row1.observe(document.querySelector("#row_animate_1"));

    let observer_row2 = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting === true) {
            row2.classList.add('push_left_row');
            row2.classList.remove('left_row_hidden');
        }
    }, options);
    observer_row2.observe(document.querySelector("#row_animate_2")); 
});



