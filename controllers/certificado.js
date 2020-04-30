const express = require('express');
const app = express();

const Certificado = require('../models/certificado');

app.get('/certificados', (req, res) => {


    Certificado.find()
        .sort('-fecha')
        .exec((err, certificadoDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            res.render('certificados', { certificadoDB })

        })

});

module.exports = app;