const express = require('express');
const app = express();
require('./functions/sincronizarGaleria');

//Inicializamos el servidor express
app.use(require('./server/server'));

//servicio de sincronización de galería
//sincronizarGaleria();
