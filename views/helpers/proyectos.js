const hbs = require('hbs');

//Aquí van los helpers

hbs.registerHelper('listarProyectos', (proyectoDB) => {
    var devolucion = "";

    for (let i = 0; i < proyectoDB.length; i++) {
        devolucion +=
            `<div class="proyectos entrada" id=${ proyectoDB[i]._id }>
            <div class="contenido">
                <h3 class="subtitulos">${ proyectoDB[i].nombre }</h3>
                <div class="clearfix">
                    <div class="imagen-entrada float-left">
                        <img src="${ proyectoDB[i].img }" alt="">
                    </div>
                    <p class="texto"> ${ proyectoDB[i].descripcion }</p>
                    <a href="${ proyectoDB[i].url }" class="centro boton">Ver proyecto</a>
                </div>
            </div>
        </div>`
    };

    return new hbs.SafeString(devolucion);
})

module.exports = {
    hbs
}