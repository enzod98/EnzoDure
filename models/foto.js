const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fotoSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'Es necesaria la descripción de la imagen']
    },
    img: {
        type: String
    },
    urlInstagram: {
        type: String
    }
});

module.exports = mongoose.model('Foto', certificadoSchema);