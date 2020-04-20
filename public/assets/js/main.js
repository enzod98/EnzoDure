document.addEventListener('DOMContentLoaded', function() {
    console.log("se cargó bien");

    $('.menu-movil').hide();
    /* Con el siguiente método fixeamos la barra del header cuando hagamos mucho scroll */
    var anchoVentana = $(window).width();

    if (anchoVentana < 768) {
        $('.site-footer').hide();
    }

    var altoVentana = $(window).height();
    let barraActivada = false;

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        /* Si es mayor a 400 porque nuestro parallax mide eso en px y 768 porque es en nuestra versión escritorio */
        if (anchoVentana > 768) {
            if (scroll > 380 && barraActivada === false) {
                $('header').addClass('barra-header contenedor').hide();
                $('div.separador').addClass('separador-inactivo');
                $('header').slideDown();
                barraActivada = true;
                // margenSuperior();
            } else if (scroll < 380) {
                $('header').removeClass('barra-header contenedor');
                $('div.separador').removeClass('separador-inactivo');
                barraActivada = false;
                // $('body').css({ 'margin-top': 0 });
            }
        } else {
            if (scroll > (altoVentana) && barraActivada === false) {
                $('header').addClass('barra-header ').hide();
                $('.navegacion').hide();
                $('.menu-movil').show();
                $('header').slideDown();
                barraActivada = true;
                // margenSuperior();
            } else if (scroll < altoVentana) {
                $('header').removeClass('barra-header ');
                $('.navegacion').show();
                $('.menu-movil').hide();
                barraActivada = false;
                // $('body').css({ 'margin-top': 0 });
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

    /* El siguiente bloque es para bloquear o desbloquear el scroll al utilizar el menú en móviles */
    var scrolling = true;

    function switchScroll() {
        if (scrolling) {
            scrolling = false;
            $('html, body').css({
                'overflow': 'hidden'
            });
        } else {
            scrolling = true;
            $('html, body').css({
                'overflow': 'auto'
            });
        }
    }

});