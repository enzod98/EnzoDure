const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const proyectoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Es necesario el nombre del proyecto']
    },
    descripcion: {
        type: String,
        required: [true, 'Es necesaria la descripción del proyecto']
    },
    img: {
        type: String
    },
    url: {
        type: String
    },

});

module.exports = mongoose.model('Proyecto', proyectoSchema);