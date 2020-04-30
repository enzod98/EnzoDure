const express = require('express');
const app = express();
const Blog = require('../models/blog');
const Cat = require('../models/categoria');
const Proyecto = require('../models/proyecto');
const Certificado = require('../models/certificado');

app.get('/', (req, res) => {

    Blog.find()
        .populate('categoria', 'descripcion')
        .limit(4)
        .sort('-fechaCreacion')
        .exec((err, blogDB) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            } else {
                Proyecto.find()
                    .limit(2)
                    .exec((err, proyectoDB) => {

                        if (err) {
                            return res.status(400).json({
                                ok: false,
                                err
                            })
                        } else {

                            Certificado.find()
                                .limit(5)
                                .sort('-fecha')
                                .exec((err, certificadoDB) => {
                                    if (err) {
                                        return res.status(500).json({
                                            ok: false,
                                            err
                                        })
                                    }

                                    res.render('index', {
                                        //el siguiente atributo le añadira la clase index al header para aplicar estilos que sólo quiero acá 
                                        claseIndex: 'index',
                                        blogDB,
                                        proyectoDB,
                                        certificadoDB
                                    });
                                })


                        }
                    })
            }
        })






});

module.exports = app;