const express = require('express');
const app = express();
const sincronizarGaleria = require('./functions/sincronizarGaleria');

//Inicializamos el servidor express
app.use(require('./server/server'));

//servicio de sincronización de galería
setInterval(sincronizarGaleria, 21600000);

