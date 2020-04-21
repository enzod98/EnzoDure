const express = require('express');
const app = express();

app.get('/blog', (req, res) => {


    res.render('blog');

});

module.exports = app;