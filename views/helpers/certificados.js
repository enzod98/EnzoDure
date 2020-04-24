const hbs = require('hbs');

//Aquí van los helpers

hbs.registerHelper('listarCertificados', (certificadoDB) => {
    var devolucion = "";

    for (let i = 0; i < certificadoDB.length; i++) {
        devolucion +=
            `<div class="entrada resaltar-hover">
                <div class="imagen-entrada">
                    <img src="${ certificadoDB[i].img}" alt="">
                </div>
                <div class="contenido centro">
                    <h3 class="subtitulos">${ certificadoDB[i].titulo }</h2>
                    <i>12 de diciembre de 2020</i>
                    <a href="${ certificadoDB[i].url}" target="_blank" class="centro boton cursos">Ver Curso</a>
                </div>
            </div>`
    };

    return new hbs.SafeString(devolucion);
})

module.exports = {
    hbs
}