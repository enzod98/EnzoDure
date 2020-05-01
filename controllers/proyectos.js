const express = require('express');
const app = express();

const Proyecto = require('../models/proyecto');

app.get('/proyectos', (req, res) => {

    Proyecto.find()
        .sort('-_id')
        .exec((err, proyectoDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            res.render('proyectos', { proyectoDB });

        })

});

module.exports = app;