const express = require('express');
const app = express();

app.get('/proyectos', (req, res) => {


    res.render('proyectos');

});

module.exports = app;