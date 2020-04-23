const express = require('express');
const app = express();

app.get('/galeria', (req, res) => {
    res.render('galeria');
})

module.exports = app;