const hbs = require('hbs');
const { obtenerFecha } = require('../../functions/obtenerFecha')

hbs.registerHelper('listarBlogsEnIndex', (blogDB) => {
    let devolucion = "";
    let fecha = new Date();

    for (let i = 0; i < blogDB.length; i++) {
        fecha = obtenerFecha(blogDB[i].fechaCreacion)
        devolucion += `
        <article class="entrada">
            <div class="imagen-entrada blog">
                <img src="${ blogDB[i].img }" alt="">
            </div>
            <div class="contenido">
                <h3 class="subtitulos">${ blogDB[i].titulo }</h3>
                <p class= "categoria">${ blogDB[i].categoria.descripcion } </p>
                <i class="fecha">${ fecha } </i>
                <p class="texto-limitado">${ blogDB[i].contenido }</p>
                <a href="/blog/${ blogDB[i]._id }">Leer más...</a>
            </div>
        </article> `
    }

    return new hbs.SafeString(devolucion);
});


hbs.registerHelper('listarProyectosEnIndex', (proyectoDB) => {
    let devolucion = "";

    for (let i = 0; i < proyectoDB.length; i++) {
        devolucion += `
        <div class="entrada">
            <div class="contenido">
                <h3 class="subtitulos">${ proyectoDB[i].nombre }</h3>
                <div class="imagen-entrada">
                <img src="${ proyectoDB[i].img }" alt="">
            </div>
                <p class="texto-limitado">${ proyectoDB[i].descripcion }</p>
                <a href="/proyectos#${ proyectoDB[i]._id }">Ver más del proyecto</a>
            </div>
        </div> `
    }

    return new hbs.SafeString(devolucion);
});

hbs.registerHelper('listarCertificadosEnIndex', (certificadoDB) => {
    let devolucion = "";

    for (let i = 0; i < certificadoDB.length; i++) {
        devolucion += `
        <li>
                <a href="/certificados#${ certificadoDB[i]._id }">
                    <h4 class="subtitulos">${ certificadoDB[i].titulo }</h4>
                </a>
            </li>`
    }

    return new hbs.SafeString(devolucion);
});

module.exports = {
    hbs
}