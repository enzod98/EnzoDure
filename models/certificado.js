const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const certificadoSchema = new Schema({
    titulo: {
        type: String,
        required: [true, 'Es necesario el título del certifiado']
    },
    img: {
        type: String
    },
    url: {
        type: String
    },
    fecha: {
        type: Date
    }
});

module.exports = mongoose.model('Certificado', certificadoSchema);