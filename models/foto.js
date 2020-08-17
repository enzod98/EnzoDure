const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fotoSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'Es necesaria la descripción de la imagen']
    },
    img: {
        type: String,
        required: [true, 'Es necesaria la url de la imagen']
    },
    urlInstagram: {
        type: String,
        required: [true, 'Es necesaria la url del post'],
        unique: true
    }
});

module.exports = mongoose.model('Foto', fotoSchema);