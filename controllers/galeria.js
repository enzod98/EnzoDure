const express = require('express');
const app = express();

const Foto = require('../models/foto');

app.get('/galeria', (req, res) => {

    Foto.find()
        .exec((err, fotosDB) =>{
            if(err){
                console.log(err);
            }

            console.log(fotosDB);
            res.render('galeria', { fotosDB });

        })

})

module.exports = app;