const hbs = require('hbs');

//Aquí van los helpers


//Este helper nos va ayudar a listar todos los blogs de nuestra BD
hbs.registerHelper('listarBlogs', (blogDB) => {
    let devolucion = "";

    for (let i = 0; i < blogDB.length; i++) {
        devolucion += `
        <article class="entrada">
            <div class="imagen-entrada blog">
                <img src="${ blogDB[i].img }" alt="">
            </div>
            <div class="contenido">
                <h3 class="subtitulos">${ blogDB[i].titulo }</h3>
                <p class= "categoria">${ blogDB[i].categoria.descripcion } </p>
                <i>${ blogDB[i].fechaCreacion } </i>
                <p class="texto-limitado">${ blogDB[i].contenido } </p>
                <a href="/blog/${ blogDB[i]._id }">Leer más...</a>
            </div>
        </article>`
    }

    return new hbs.SafeString(devolucion);
})

//Este helper nos va ayudar a listar un artículo por ID

hbs.registerHelper('listarArticulo', (articuloDB) => {
    console.log(articuloDB);
    let devolucion = ""
    devolucion += `
        <div class="cabecera-blog-unico">
            <h2 class="subtitulos">${ articuloDB.titulo }</h3>
            <p class="categoria">${ articuloDB.categoria.descripcion }</p>
            <i>${ articuloDB.fechaCreacion } </i>
        </div>
        <div class="contenido">
            <div class="imagen-entrada blog-por-id">
                <img src="${ articuloDB.img }" alt="">
            </div>
            <p class="articulo-completo"> ${ articuloDB.contenido }</p>
        </div>`

    return new hbs.SafeString(devolucion);
})


module.exports = {
    hbs
}