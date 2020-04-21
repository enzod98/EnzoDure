document.addEventListener('DOMContentLoaded', function() {
    //Vamos a añadir estilo de footer al nav del mismo para que sea distinto al nav del header
    $('.contenedor.footer nav').removeClass('navegacion');
    $('.contenedor.footer nav').addClass('navegacion-footer');
    $('.menu-movil').hide();

    /* Con el siguiente método fixeamos la barra del header cuando hagamos mucho scroll */
    var anchoVentana = $(window).width();
    var altoVentana = $(window).height();
    let barraActivada = false;

    if (anchoVentana < 768) {
        $('.site-footer').hide();
    }

    //cosas que sólo se disparan en el index
    if ($('.site-header.index').length > 0) {
        desactivarBarraHeader('desktop');
        desactivarBarraHeader('movil');

        $('div.separador').removeClass('separador-inactivo');
        $('.contenedor-presentacion').append(`
        <div class="presentacion">
            <p> Un informático aficionado al mundo de la tecnología las buenas fotos, los videojuegos y el arte de aprender</p>
        </div>`);

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            /* Si es mayor a 400 porque nuestro parallax mide eso en px y 768 porque es en nuestra versión escritorio */
            if (anchoVentana > 768) {
                if ((scroll > 380 && barraActivada === false)) {
                    activarBarraHeader('desktop');
                    // margenSuperior();
                } else if (scroll < 380) {
                    desactivarBarraHeader('desktop');
                    // $('body').css({ 'margin-top': 0 });
                }
            } else {
                if (scroll > (altoVentana) && barraActivada === false) {
                    activarBarraHeader('movil');
                } else if (scroll < altoVentana) {
                    desactivarBarraHeader('movil');
                    // $('body').css({ 'margin-top': 0 });
                }
            }


        })
    } else {
        if (anchoVentana > 768) {
            activarBarraHeader('desktop');
            $('body').css({ 'padding-top': '9rem' });
        } else {
            activarBarraHeader('movil');
            $('body').css({ 'padding-top': '7.5rem' });
        }
    }



    function activarBarraHeader(tipoPantalla) {
        $('header').addClass('barra-header contenedor').hide();
        if (tipoPantalla === 'desktop') {
            $('div.separador').addClass('separador-inactivo');
            $('header').slideDown();
        } else if (tipoPantalla === 'movil') {
            $('.navegacion').hide();
            $('.menu-movil').show();
            $('header').slideDown();

        }

        barraActivada = true;

    }

    function desactivarBarraHeader(tipoPantalla) {
        if (tipoPantalla === 'desktop') {
            $('header').removeClass('barra-header contenedor');
            $('div.separador').removeClass('separador-inactivo');
        } else if (tipoPantalla === 'movil') {
            $('header').removeClass('barra-header ');
            $('.navegacion').show();
            $('.menu-movil').hide();
        }
        barraActivada = false
    }

    function margenSuperior() {
        var barraAltura = $('.barra-header').innerHeight();
        $('body').css({ 'margin-top': `${barraAltura}px` });
    }

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