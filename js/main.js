document.addEventListener('DOMContentLoaded', function() {
    console.log("se cargó bien");


    /* Con el siguiente método fixeamos la barra del header cuando hagamos mucho scroll */
    var anchoVentana = $(window).width();

    /* if (anchoVentana < 768) {
        $('.site-footer').addClass('oculto');
    } */

    var altoVentana = $(window).height();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        /* Si es mayor a 400 porque nuestro parallax mide eso en px y 768 porque es en nuestra versión escritorio */
        if (anchoVentana > 768) {
            if (scroll > 380) {
                $('header').addClass('barra-header contenedor');
                $('div.separador').addClass('separador-inactivo');
                margenSuperior();
            } else {
                $('header').removeClass('barra-header contenedor');
                $('div.separador').removeClass('separador-inactivo');
                $('body').css({ 'margin-top': 0 });
            }
        } else {
            if (scroll > (altoVentana - 70)) {
                $('header').addClass('barra-header');
                $('.navegacion').hide();
                $('.menu-movil').removeClass('oculto');
                margenSuperior(anchoVentana, altoVentana);
            } else {
                $('header').removeClass('barra-header');
                $('.navegacion').show();
                $('.menu-movil').addClass('oculto');
                $('body').css({ 'margin-top': 0 });
            }
        }

        function margenSuperior(anchoVentana, altoVentana) {
            var barraAltura = $('.barra-header').innerHeight();
            $('body').css({ 'margin-top': (barraAltura * 2) + 'px' });
            if (anchoVentana != 0) {
                $('.site-footer').css({ 'height': (altoVentana - barraAltura) + 'px' });
            }
        }

    })

    //Menú Responsive
    $('.menu-movil').on('click', function() {
        $('.side-footer');
    });



});