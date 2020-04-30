const hbs = require('hbs');
const { obtenerFecha } = require('../../functions/obtenerFecha')

//Aquí van los helpers

hbs.registerHelper('listarCertificados', (certificadoDB) => {
    var devolucion = "";

    for (let i = 0; i < certificadoDB.length; i++) {

        var fecha = obtenerFecha(certificadoDB[i].fecha);

        devolucion +=
            `<div class="entrada resaltar-hover" id="${ certificadoDB[i]._id }">
            <div class="imagen-entrada">
                <img src="${ certificadoDB[i].img}" alt="">
            </div>
            <div class="contenido centro">
                <h3 class="subtitulos">${ certificadoDB[i].titulo }</h2>
                <i>${ fecha }</i>
                <a href="${ certificadoDB[i].url}" target="_blank" class="centro boton cursos">Comprobar</a>
            </div>
        </div>`
    };

    return new hbs.SafeString(devolucion);
})

module.exports = {
    hbs
}