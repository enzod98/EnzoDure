const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "Es necesario el título del Blog"]
    },
    contenido: {
        type: String,
        required: [true, "Es necesaria la descripción del Blog"]
    },
    img: {
        type: String,
        required: [true, "Es necesaria la imagen del Blog"]
    },
    fechaCreacion: {
        type: String
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: [true, 'Debe especificarse una categoria válida']
    }

})

module.exports = mongoose.model('Blog', blogSchema);