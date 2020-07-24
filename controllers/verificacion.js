const express = require('express');
const app = express();

app.get('/verificar', (req, res) => {
    res.render('verificacion');
})

module.exports = app;