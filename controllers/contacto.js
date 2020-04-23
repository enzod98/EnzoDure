const express = require('express');
const app = express();

app.get('/contacto', (req, res) => {
    res.render('contacto');
})

module.exports = app;