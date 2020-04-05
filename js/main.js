document.addEventListener('DOMContentLoaded', function() {
    console.log("se cargó bien");


    /* Con el siguiente método fixeamos la barra del header cuando hagamos mucho scroll */
    var anchoVentana = $(window).width();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        /* Si es mayor a 400 porque nuestro parallax mide eso en px y 768 porque es en nuestra versión escritorio */
        if (anchoVentana > 768) {
            if (scroll > 400) {
                $('header').addClass('barra-header contenedor');
                console.log("Aloha");
                $('div.separador').addClass('separador-inactivo');
            } else {
                $('header').removeClass('barra-header contenedor');
                console.log("Aloha");
                $('div.separador').removeClass('separador-inactivo');
            }
        }
    })



});