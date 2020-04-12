document.addEventListener('DOMContentLoaded', function() {
    console.log("se cargó bien");

    $('.menu-movil').hide();
    /* Con el siguiente método fixeamos la barra del header cuando hagamos mucho scroll */
    var anchoVentana = $(window).width();

    if (anchoVentana < 768) {
        $('.site-footer').hide();
    }

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
            if (scroll > (altoVentana)) {
                $('header').addClass('barra-header ');
                $('.navegacion').hide();
                $('.menu-movil').show();
                margenSuperior();
            } else {
                $('header').removeClass('barra-header ');
                $('.navegacion').show();
                $('.menu-movil').hide();
                $('body').css({ 'margin-top': 0 });
            }
        }

        function margenSuperior() {
            var barraAltura = $('.barra-header').innerHeight();
            $('body').css({ 'margin-top': (barraAltura) + 'px' });
        }

    })

    //Menú Responsive
    $('.menu-movil').on('click', function() {
        $('.site-footer').animate({
            width: "toggle",
            opacity: "toggle"

        })
        $('.site-footer').css({ 'position': 'fixed', 'top': 0, 'left': 0, 'z-index': 3, 'height': 100 + '%' });
        switchScroll();
    });

    var scrolling = true;

    function switchScroll() {
        if (scrolling) {
            scrolling = false;
            $('html, body').css({
                'overflow': 'hidden'
            });
            console.log('bloquea el scroll');
        } else {
            scrolling = true;
            $('html, body').css({
                'overflow': 'auto'
            });
        }
    }

});