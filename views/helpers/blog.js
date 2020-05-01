const hbs = require('hbs');
const { obtenerFecha } = require('../../functions/obtenerFecha');
//Aquí van los helpers


//Este helper nos va ayudar a listar todos los blogs de nuestra BD
hbs.registerHelper('listarBlogs', (blogDB) => {
    let devolucion = "";
    for (let i = 0; i < blogDB.length; i++) {
        var fecha = obtenerFecha(blogDB[i].fechaCreacion);
        devolucion += `
        <article class="entrada">
            <div class="imagen-entrada blog">
                <img src="${ blogDB[i].img }" alt="">
            </div>
            <div class="contenido">
                <h3 class="subtitulos">${ blogDB[i].titulo }</h3>
                <p class= "categoria">${ blogDB[i].categoria.descripcion } </p>
                <i>${ fecha } </i>
                <p class="texto-limitado">${ blogDB[i].contenido } </p>
                <a href="/blog/${ blogDB[i]._id }">Leer más...</a>
            </div>
        </article>`
    }

    return new hbs.SafeString(devolucion);
})

//Este helper nos va ayudar a listar un artículo por ID

hbs.registerHelper('listarArticulo', (articuloDB) => {
    fecha = obtenerFecha(articuloDB.fechaCreacion);
    let devolucion = ""
    devolucion += `
        <div class="cabecera-blog-unico">
            <h2 class="subtitulos">${ articuloDB.titulo }</h3>
            <p class="categoria">${ articuloDB.categoria.descripcion }</p>
            <i>${ fecha } </i>
        </div>
        <div class="contenido">
            <div class="imagen-entrada float-left">
                <img src="${ articuloDB.img }" alt="">
            </div>
            <p class="texto"> ${ articuloDB.contenido }</p>
        </div>`

    return new hbs.SafeString(devolucion);
})


module.exports = {
    hbs
}