const express = require('express');
const app = express();

app.use(require('./home'));
app.use(require('./blog'));
app.use(require('./proyectos'));
app.use(require('./galeria'));
app.use(require('./contacto'));
app.use(require('./certificado'));
app.use(require('./about'));
app.use(require('./verificacion'));

module.exports = app;