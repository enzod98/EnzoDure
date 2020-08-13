const hbs = require('hbs');

//Aquí van los helpers

hbs.registerHelper(require('./certificados'));
hbs.registerHelper(require('./blog'));
hbs.registerHelper(require('./proyectos'));
hbs.registerHelper(require('./galeria'));
hbs.registerHelper(require('./index'));

module.exports = {
    hbs
}