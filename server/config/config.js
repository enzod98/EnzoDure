/* Entorno */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


/* Definición del puerto a utilizar */
process.env.PORT = process.env.PORT || 3000;


/* Definición de nuestra dirección de BD */

process.env.URIDB = process.env.URIDB || 'mongodb://localhost:27017/blogEnzoDure'