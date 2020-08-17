const express = require("express");
const app = express();
const sincronizarGaleria = require("./functions/sincronizarGaleria");

//Forzamos nuestra página a HTTPS estando en producción
if (process.env.NODE_ENV === "production") {
  app.use(function (req, res, next) {
    if (!req.secure && req.get("X-Forwarded-Proto") !== "https") {
      res.redirect(307, "https://" + req.get("Host") + req.url);
    } else next();
  });
}

//Inicializamos el servidor express
app.use(require("./server/server"));

//servicio de sincronización de galería
//La cantidad de milisegundos es para que sincronice 4 veces al día, ya que nuestra API limita el número de llamadas diarías a 5
setInterval(sincronizarGaleria, 21600000);
