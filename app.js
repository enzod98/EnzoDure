require('./server/config/config');

const express = require('express');
const app = express();
const hbs = require('hbs');


//Motor HBS
//definimos la carpeta estática pública
app.use(express.static('./public'));

//Con esto indicamos la ruta en donde se encuentran nuestros parciales al hbs
hbs.registerPartials('./views/partials');

//Con esto le decimos a express que nuestro motor de plantillas HTML será HBS
app.set('view engine', 'hbs');


app.get('/', (req, res) => {


    res.render('index');

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando peticiones en el puerto ', process.env.PORT);
});