document.addEventListener('DOMContentLoaded', function() {
    console.log("se cargó bien");


    /* Con el siguiente método fixeamos la barra del header cuando hagamos mucho scroll */
    var anchoVentana = $(window).width();
    var altoVentana = $(window).height();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        /* Si es mayor a 400 porque nuestro parallax mide eso en px y 768 porque es en nuestra versión escritorio */
        if (anchoVentana > 768) {
            if (scroll > 400) {
                $('header').addClass('barra-header contenedor');
                $('div.separador').addClass('separador-inactivo');
                margenSuperior();
            } else {
                $('header').removeClass('barra-header contenedor');
                $('div.separador').removeClass('separador-inactivo');
                $('body').css({ 'margin-top': 0 });
            }
        } else {
            if (scroll > altoVentana) {
                $('header').addClass('barra-header');
                $('.navegacion').hide();
                $('.menu-movil').removeClass('oculto');
                margenSuperior();
            } else {
                $('header').removeClass('barra-header');
                $('.navegacion').show();
                $('.menu-movil').addClass('oculto');
                $('body').css({ 'margin-top': 0 });
            }
        }

        function margenSuperior() {
            var barraAltura = $('.barra-header').innerHeight();
            $('body').css({ 'margin-top': (barraAltura + 100) + 'px' });
        }

    })



});