const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const transporter = require('../server/config/mail');


app.get('/contacto', (req, res) => {
    res.render('contacto');
})

app.post('/enviar-correo-contacto', (req, res) => {

    let body = req.body;
    let HTMLMensaje = `  <h1>Mensaje de: ${ body.nombre }</h1>
                        <h4>Email: ${ body.email }</h2>
                        <h4>Número: ${ body.telefono }</h2>
                        <p>Mensaje: ${ body.mensaje }</p>`

    let mailOptions = {
        from: 'enzod98@outlook.com',
        to: 'enzod98@outlook.com',
        subject: 'Nuevo mensaje de Contacto',
        html: HTMLMensaje
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });

    res.redirect('/contacto');

})

module.exports = app;