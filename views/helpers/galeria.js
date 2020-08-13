const hbs = require('hbs');

//Aquí van los helpers

hbs.registerHelper('listarFotos', (fotosDB) => {
    var devolucion = "";

    for (let i = 0; i < fotosDB.length; i++) {

        devolucion +=
            `<div class="entrada">
            <div class="imagen-entrada img-borde resaltar-hover">
                <img src="${ fotosDB[i].img }" alt="">
                </div>
                <div class="contenido fotos">
                
                <p>${fotosDB[i].descripcion}</p>
                <a href="${ fotosDB[i].urlInstagram }" target="_blank" class="centro boton cursos">Ver publicación</a>
            </div>
        </div>`
    };

    return new hbs.SafeString(devolucion);
})

module.exports = {
    hbs
}