function obtenerFecha(fecha) {

    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();

    var mesEscrito = obtenerMesEscrito(mes);

    return `${ dia } de ${ mesEscrito } de ${ anio }`;
}

function obtenerMesEscrito(mes) {
    let mesEscrito;
    switch (mes) {
        case 1:
            mesEscrito = "Enero";
            break;
        case 2:
            mesEscrito = "Febrero";
            break;
        case 3:
            mesEscrito = "Marzo";
            break;
        case 4:
            mesEscrito = "Abril";
            break;
        case 5:
            mesEscrito = "Mayo";
            break;
        case 6:
            mesEscrito = "Junio";
            break;
        case 7:
            mesEscrito = "Julio";
            break;
        case 8:
            mesEscrito = "Agosto";
            break;
        case 9:
            mesEscrito = "Setiembre";
            break;
        case 10:
            mesEscrito = "Octubre";
            break;
        case 11:
            mesEscrito = "Noviembre";
            break;
        case 12:
            mesEscrito = "Diciembre";
            break;
    }

    return mesEscrito;
}

module.exports = {
    obtenerFecha
}