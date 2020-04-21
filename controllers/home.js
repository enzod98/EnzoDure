const express = require('express');
const app = express();

app.get('/', (req, res) => {


    res.render('index', {
        //el siguiente atributo le añadira la clase index al header para aplicar estilos que sólo quiero acá 
        claseIndex: 'index'
    });

});

module.exports = app;