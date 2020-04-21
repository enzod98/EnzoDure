require('./config/config');
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
//Importamos los helpers del HBS
require('../views/helpers/helpers')

//Motor HBS
//definimos la carpeta estática pública
app.use(express.static(path.resolve(__dirname, '../public')));

//Con esto le decimos a express que nuestro motor de plantillas HTML será HBS

//Con esto indicamos la ruta en donde se encuentran nuestros parciales al hbs
hbs.registerPartials(path.resolve(__dirname, '../views/partials'));

app.set('view engine', 'hbs');


app.use(require('../controllers/indexControllers'));


app.listen(process.env.PORT, () => {
    console.log('Escuchando peticiones en el puerto ', process.env.PORT);
});

module.exports = app;