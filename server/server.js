require('./config/config');
//Express - Nuestro motor principal de peticiones
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//Mongoose - Nuestro gestor de BD noSQL
const mongoose = require('mongoose');

//HBS - Motor de Plantillas HTML
const hbs = require('hbs');
const path = require('path');
//Importamos los helpers del HBS
require('../views/helpers/helpers')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Motor HBS
//definimos la carpeta estática pública
app.use(express.static(path.resolve(__dirname, '../public/')));

//Con esto le decimos a express que nuestro motor de plantillas HTML será HBS

//Con esto indicamos la ruta en donde se encuentran nuestros parciales al hbs
hbs.registerPartials(path.resolve(__dirname, '../views/partials'));

app.set('view engine', 'hbs');


app.use(require('../controllers/indexControllers'));


mongoose.connect(process.env.URIDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, res) => {
    if (err) {
        return console.log({
            ok: false,
            message: 'No se pudo conectar a la BD',
            err
        });
    } else {
        console.log('Conexión exitosa a BD');
    }

})


app.listen(process.env.PORT, () => {
    console.log('Escuchando peticiones en el puerto ', process.env.PORT);
});

module.exports = app;