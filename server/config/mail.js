const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: 'enzod98@outlook.com',
        pass: process.env.MAILPASS
    }
});

module.exports = transporter;