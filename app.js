const express = require('express');
const app = express();

//Inicializamos el servidor express
app.use(require('./server/server'));