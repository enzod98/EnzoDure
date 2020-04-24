const hbs = require('hbs');

//Aquí van los helpers

hbs.registerHelper(require('./certificados'));
hbs.registerHelper(require('./blog'));

module.exports = {
    hbs
}