const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    descripcion: {
        type: String,
        require: [true, "Es necesaria la descripción de categoria"]
    }
});

module.exports = mongoose.model('Categoria', categoriaSchema);