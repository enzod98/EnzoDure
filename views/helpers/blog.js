const hbs = require('hbs');

//Aquí van los helpers

hbs.registerHelper('listarBlogs', (blogDB) => {
    var devolucion = "";

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
                <a href="#">Leer más...</a>
            </div>
        </article>`
    }

    return new hbs.SafeString(devolucion);
})

module.exports = {
    hbs
}